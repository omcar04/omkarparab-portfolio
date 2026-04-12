"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const AREA_HEIGHT = 280;
const BALL_SIZE = 40;
const BALL_HITBOX_SIZE = 64;
const GRAVITY = 0.22;
const BOUNCE = 0.8;
const FRICTION = 0.995;
const MAX_AIR_KICK = -7.2;

type Position = {
  x: number;
  y: number;
};

type Velocity = {
  x: number;
  y: number;
};

const START_POSITION = {
  x: 0,
  y: AREA_HEIGHT - BALL_SIZE - 34,
};

export default function SoccerJuggle() {
  const areaRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef<Position>(START_POSITION);
  const velocityRef = useRef<Velocity>({ x: 0, y: 0 });
  const groundHitRef = useRef(false);
  const [juggles, setJuggles] = useState(0);

  function renderBall(position: Position) {
    if (!ballRef.current) {
      return;
    }

    ballRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
  }

  useEffect(() => {
    function placeBallAtRest() {
      const areaWidth = areaRef.current?.clientWidth ?? 320;
      const nextPosition = {
        x: areaWidth / 2 - BALL_HITBOX_SIZE / 2,
        y: AREA_HEIGHT - BALL_SIZE - 34,
      };

      positionRef.current = nextPosition;
      renderBall(nextPosition);
    }

    placeBallAtRest();

    function handleResize() {
      if (
        frameRef.current === null &&
        Math.abs(velocityRef.current.x) < 0.2 &&
        Math.abs(velocityRef.current.y) < 0.2
      ) {
        placeBallAtRest();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function animate() {
    const nextVelocity = {
      x: velocityRef.current.x * FRICTION,
      y: velocityRef.current.y + GRAVITY,
    };

    const nextPosition = {
      x: positionRef.current.x + nextVelocity.x,
      y: positionRef.current.y + nextVelocity.y,
    };

    const areaWidth = areaRef.current?.clientWidth ?? 320;
    const maxX = Math.max(areaWidth - BALL_HITBOX_SIZE, 0);
    const maxY = AREA_HEIGHT - BALL_SIZE - 34;

    if (nextPosition.x <= 0 || nextPosition.x >= maxX) {
      nextPosition.x = Math.min(Math.max(nextPosition.x, 0), maxX);
      nextVelocity.x *= -BOUNCE;
    }

    if (nextPosition.y <= 0 || nextPosition.y >= maxY) {
      nextPosition.y = Math.min(Math.max(nextPosition.y, 0), maxY);

      if (nextPosition.y >= maxY && !groundHitRef.current) {
        groundHitRef.current = true;
        setJuggles(0);
      }

      nextVelocity.y *= -BOUNCE;

      if (nextPosition.y >= maxY) {
        nextVelocity.x *= 0.96;
      }
    }

    positionRef.current = nextPosition;
    velocityRef.current = nextVelocity;
    renderBall(nextPosition);

    const settled =
      nextPosition.y >= maxY - 0.5 &&
      Math.abs(nextVelocity.x) < 0.15 &&
      Math.abs(nextVelocity.y) < 0.9;

    if (settled) {
      velocityRef.current = { x: 0, y: 0 };
      frameRef.current = null;
      return;
    }

    frameRef.current = window.requestAnimationFrame(animate);
  }

  function kickBall() {
    const maxY = AREA_HEIGHT - BALL_SIZE - 34;
    const inAir = positionRef.current.y < maxY - 4;
    const horizontalDirection = Math.random() > 0.5 ? 1 : -1;
    const currentX = velocityRef.current.x;

    const nextX =
      inAir && Math.abs(currentX) > 0.2
        ? currentX * 0.72
        : horizontalDirection * (0.75 + Math.random() * 0.8);

    const nextY = inAir
      ? Math.min(velocityRef.current.y - 4.2, MAX_AIR_KICK)
      : -(6.6 + Math.random() * 1.5);

    velocityRef.current = { x: nextX, y: nextY };
    groundHitRef.current = false;
    setJuggles((count) => count + 1);

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(animate);
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    kickBall();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
          Playground
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          A tiny football break.
        </h2>
      </div>

      <div className="border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors duration-300">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
              Keep-Ups
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
              Count
            </p>
            <p className="text-2xl font-semibold text-[var(--accent)]">
              {juggles}
            </p>
          </div>
        </div>

        <div
          ref={areaRef}
          className="relative mt-6 overflow-hidden rounded-[28px] border border-dashed border-[var(--border)] bg-[var(--chip-bg)]"
          style={{ height: AREA_HEIGHT }}
        >
          <div className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.06))]" />
          <div className="absolute inset-x-6 bottom-8 h-px bg-[#b7ff00]" />

          <div
            ref={ballRef}
            className="pointer-events-none absolute left-0 top-0"
          >
            <button
              type="button"
              onPointerDown={handlePointerDown}
              aria-label="Juggle the soccer ball"
              className="pointer-events-auto relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full outline-none transition-transform active:scale-95 [touch-action:none] select-none"
            >
              <span
                className="absolute inset-x-3 bottom-1 h-2 rounded-full bg-black/18 blur-md"
                aria-hidden="true"
              />
              <Image
                src="/playground-ball-v2.png"
                alt=""
                width={BALL_SIZE}
                height={BALL_SIZE}
                priority={false}
                className="relative h-10 w-10 select-none object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.16)]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
