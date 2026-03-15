import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { WebGLShader } from '@/components/ui/web-gl-shader';

type SplashStat = {
  label: string;
  value: string;
};

type TerminalSplashProps = {
  onComplete: () => void;
  name?: string;
  tagline?: string;
  statusText?: string;
  buttonText?: string;
  stats?: SplashStat[];
};

const defaultStats: SplashStat[] = [
  { value: '10+', label: 'PROJECTS' },
  { value: '1+', label: 'YEARS' },
  { value: '12+', label: 'TECH STACK' },
];

const TerminalSplash = ({
  onComplete,
  name = 'AZCHARIA',
  tagline = 'ANDROID DEVELOPER',
  statusText = 'SYSTEM READY',
  buttonText = "LET'S GO",
  stats = defaultStats,
}: TerminalSplashProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <WebGLShader />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,20,20,0.1),rgba(0,0,0,0.72)_65%,rgba(0,0,0,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_6px)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl border border-zinc-800/80 bg-black/35 p-2 backdrop-blur-sm">
          <main className="border border-zinc-800/80 px-6 py-10 sm:px-8 sm:py-14">
            <h1 className="mb-3 text-center text-5xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-[clamp(4rem,8vw,7rem)]">
              {name}
            </h1>

            <p className="mx-auto max-w-2xl px-3 text-center text-xs tracking-[0.28em] text-white/70 sm:text-sm">
              {tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm sm:mt-10 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[#f15738] sm:text-3xl">{stat.value}</div>
                  <div className="text-[11px] tracking-[0.18em] text-white/60 sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="my-8 flex items-center justify-center gap-2 sm:my-10">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <p className="text-xs tracking-[0.16em] text-green-500">{statusText}</p>
            </div>

            <div className="flex justify-center">
              <LiquidButton
                className="rounded-full border border-white/20 px-8 text-white"
                size="xl"
                onClick={onComplete}
                aria-label="Enter portfolio"
              >
                {buttonText}
              </LiquidButton>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TerminalSplash;

