import Image from "next/image";
import { xumm3rLogoAsset } from "@/config/content-catalog";

type PasscodePageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function PasscodePage({ searchParams }: PasscodePageProps) {
  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-[var(--space-sm)]">
      <section className="w-full max-w-[360px]">
        {xumm3rLogoAsset ? (
          <Image
            className="mb-[var(--space-sm)] h-auto w-[180px]"
            src={xumm3rLogoAsset.src}
            alt="xumm3r logo"
            width={605}
            height={187}
            priority
          />
        ) : null}
        <h1 className="m-0 font-[var(--font-display)] text-[length:var(--size-nav)] leading-[var(--lh-nav)] uppercase">
          Enter Passcode
        </h1>
        <div className="mb-[var(--space-sm)] mt-[var(--space-xs)]" />

        <form action="/api/unlock" method="post" className="grid gap-[var(--space-xs)]">
          <label
            htmlFor="passcode"
            className="font-[var(--font-display)] text-[length:var(--size-micro)] leading-[var(--lh-micro)] uppercase"
          >
            Passcode
          </label>
          <input
            id="passcode"
            name="passcode"
            type="password"
            autoComplete="current-password"
            required
            className="h-[44px] w-full border border-[var(--color-surface-outline)] bg-transparent px-[var(--space-xs)] font-[var(--font-body)] text-[var(--color-text-on-bg)] outline-none focus:border-[var(--color-nav-hover-yellow)]"
          />
          <button
            type="submit"
            className="h-[44px] border border-[var(--color-surface-outline)] font-[var(--font-display)] text-[length:var(--size-micro)] leading-[var(--lh-micro)] uppercase transition-colors hover:border-[var(--color-nav-hover-yellow)]"
          >
            Enter
          </button>
        </form>

        {hasError ? (
          <p className="mt-[var(--space-xs)] font-[var(--font-body)] text-[length:var(--size-micro)] leading-[var(--lh-micro)]">
            Wrong passcode.
          </p>
        ) : null}
      </section>
    </main>
  );
}
