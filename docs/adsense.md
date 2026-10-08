# AdSense setup

- Publisher: pub-9276686549248163. Site: uolink.jp.
- On 2026-10-08 the user submitted the review request; the dashboard showed 準備中／審査待ち. Do not submit a duplicate request or describe this as approval.
- Payment profile onboarding showed completed; future Google payment verification is separate.
- Verification: google-adsense-account metadata in Japanese and English layouts, and public/ads.txt.
- Privacy pages: /privacy and /en/privacy; linked from the shared footer and language switch.
- Manual unit: 7695773092, UOLINK GUIDE 記事末 300x250. One unit after the GUIDE body, before related content, with 48px separation.
- No MAP, QUEST, forms, navigation, sticky, anchor or vignette placements. On 2026-10-08 uolink.jp Auto ads and Auto optimization were both OFF.
- NEXT_PUBLIC_ADSENSE_ENABLED stays false/unset pending site approval and completed consent configuration. The user authorized advertising, but automatic approval review blocked enabling before these prerequisites. This public switch is compiled at build time.
- Google European regulations message: UOLINK Privacy, English, uolink.jp, https://uolink.jp/en/privacy, Consent / Do not consent / Manage options. Draft saved; publish only after the privacy URL is live. Check its publication and revocation entry point before enabling ads.
- Advertising code is lazy and asynchronous. QA must not click live ads; use a blocked/mocked network response for ad layout checks.
- Vercel automatic builds remain disabled. Use only the previously authorized single local-build production update, and inspect function bundles before upload. Do not introduce paid services or recurring deployments.
- Two purchasing guides added 2026-10-08: electric-reel-boat-power-or-battery and cooler-inner-length-not-liters. They use existing guide navigation and Amazon URL generation with uolink.jp-22.

## After approval

1. Confirm Google shows the site ready, with no policy or payment blockers.
2. Publish/check required Google consent messages and privacy-choice controls.
3. Enable the existing manual ad switch in an authorized release. Check phone/desktop layouts with test ads, without clicking advertisements.
4. Evaluate page RPM, viewability, traffic and affiliate conversions before adding another slot. Revenue is not guaranteed by article count or ad count.
