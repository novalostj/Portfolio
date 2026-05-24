"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/utils";

declare function createUnityInstance(
  canvas: HTMLCanvasElement,
  config: UnityConfig,
  onProgress: (progress: number) => void,
): Promise<UnityInstance>;

interface UnityConfig {
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl: string;
  companyName: string;
  productName: string;
  productVersion: string;
  showBanner?: (msg: string, type: string) => void;
}

interface UnityInstance {
  Quit: () => Promise<void>;
  SendMessage: (
    objectName: string,
    methodName: string,
    argument?: string,
  ) => void;
  SetFullscreen: () => void;
}

interface UnityGameEmbedProps {
  buildPath: string;
  productName?: string;
  companyName?: string;
  productVersion?: string;
}

export default function UnityGameEmbed({
  buildPath,
  productName = "Build",
  companyName = "FireRatIncrease",
  productVersion = "1.0",
}: UnityGameEmbedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<UnityInstance | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let unityInstance: UnityInstance | null = null;

    const baseUrl = assetPath(`/unity-games/${buildPath}`);
    const buildUrl = `${baseUrl}/Build`;

    const config: UnityConfig = {
      dataUrl: `${buildUrl}/${productName}.data`,
      frameworkUrl: `${buildUrl}/${productName}.framework.js`,
      codeUrl: `${buildUrl}/${productName}.wasm`,
      streamingAssetsUrl: `${baseUrl}/StreamingAssets`,
      companyName,
      productName,
      productVersion,
    };

    async function initUnity() {
      try {
        const instance = await createUnityInstance(
          canvas!,
          config,
          (progress) => {
            setProgress(progress * 100);
          },
        );
        unityInstance = instance;
        instanceRef.current = instance;
        setStatus("ready");
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Failed to initialize game",
        );
      }
    }

    // Load the Unity loader script dynamically
    const script = document.createElement("script");
    script.src = `${buildUrl}/${productName}.loader.js`;
    script.async = true;
    script.onload = () => {
      initUnity();
    };
    script.onerror = () => {
      setStatus("error");
      setErrorMessage("Failed to load Unity loader script");
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script tag
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Quit Unity instance
      if (unityInstance) {
        unityInstance.Quit().catch(() => {
          /* ignore cleanup errors */
        });
      }
    };
  }, [buildPath, productName, companyName, productVersion]);

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      {/* Game container */}
      <div className="relative aspect-video bg-[var(--color-background)]">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          id={`unity-canvas-${buildPath}`}
        />

        {/* Loading overlay */}
        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[var(--color-background)]">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-accent)]"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-accent)]"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-accent)]"
                style={{ animationDelay: "300ms" }}
              />
            </div>
            <div className="w-64">
              <div className="mb-1 flex justify-between text-xs text-[var(--color-muted)]">
                <span>Loading game...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]">
                <div
                  className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Error overlay */}
        {status === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--color-background)] p-6 text-center">
            <svg
              className="h-10 w-10 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <p className="text-sm text-[var(--color-muted)]">{errorMessage}</p>
            <p className="text-xs text-[var(--color-muted)]">
              Make sure the WebGL build is placed in{" "}
              <code className="rounded bg-[var(--color-surface)] px-1.5 py-0.5">
                public/unity-games/{buildPath}/
              </code>
            </p>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between border-t border-[var(--color-border)] px-4 py-2">
        <span className="text-xs text-[var(--color-muted)]">
          {status === "ready"
            ? "Game loaded — use mouse + keyboard to play"
            : "Preparing game..."}
        </span>
        <button
          onClick={() => {
            instanceRef.current?.SetFullscreen();
          }}
          className="rounded-lg px-3 py-1 text-xs font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-foreground)] disabled:opacity-50"
          disabled={status !== "ready"}
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
}
