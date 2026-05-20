import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">
            LenDen Notes
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-600">Last updated: 20 May 2026</p>
        </div>

        <div className="space-y-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-10">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes is a simple personal ledger app designed to help
              users remember informal lending and borrowing records. This
              Privacy Policy explains how LenDen Notes handles your information
              when you use the app.
            </p>
            <p className="leading-7 text-slate-700">
              LenDen Notes is developed and published by NepaliFx.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Information you enter</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes lets you manually enter personal ledger information,
              such as names, amounts, currencies, notes, dates, due dates,
              reminder preferences, and interest-related details.
            </p>
            <p className="leading-7 text-slate-700">
              This information is used only to help you view, manage, edit,
              delete, and share your own lending and borrowing records inside
              the app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Local-first data storage</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes is designed as a local-first app. Your records are
              stored on your own device using local app storage. The app does
              not require you to create an account, sign in, or upload your
              records to a cloud server.
            </p>
            <p className="leading-7 text-slate-700">
              If you delete the app, clear app data, lose your phone, or change
              devices, your locally stored records may be lost unless you have
              separately backed them up or exported them using available device
              features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. No account required</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes does not currently require user registration, login,
              email address, phone number, or password to use the core app
              features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">
              5. Notifications and reminders
            </h2>
            <p className="leading-7 text-slate-700">
              If you enable reminders, LenDen Notes may ask your device for
              notification permission. Notifications are used to remind you
              about due dates related to records you create in the app.
            </p>
            <p className="leading-7 text-slate-700">
              Notification settings can be controlled through your device
              settings. LenDen Notes does not use notifications for advertising.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Sharing records</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes may allow you to share a summary of a person’s ledger
              through apps installed on your device, such as messaging or social
              apps. Sharing is only done when you choose to do it.
            </p>
            <p className="leading-7 text-slate-700">
              Once you share information outside LenDen Notes, that information
              is handled by the app or service you choose to share it with.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Data we do not collect</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes does not currently collect, sell, rent, or trade your
              personal ledger records. The app does not include advertising and
              does not use your records for marketing or profiling.
            </p>
            <p className="leading-7 text-slate-700">
              LenDen Notes does not process payments, provide loans, offer
              banking services, provide investment services, or connect to your
              bank account or wallet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Third-party services</h2>
            <p className="leading-7 text-slate-700">
              The app may rely on standard platform services provided by Apple,
              Google, Expo, or your device operating system for app delivery,
              notifications, crash handling, or basic platform functionality.
              These services may process limited technical information according
              to their own privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Children’s privacy</h2>
            <p className="leading-7 text-slate-700">
              LenDen Notes is not designed for children under 13 and is not
              intentionally directed at children. If you believe a child has
              provided personal information through the app, please contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">10. Security</h2>
            <p className="leading-7 text-slate-700">
              We aim to keep LenDen Notes simple and privacy-conscious by
              storing records locally on your device. However, no method of
              storage or transmission is completely secure. You are responsible
              for keeping your device secure, including using device lock,
              password, PIN, fingerprint, or face unlock where available.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">11. Changes to this policy</h2>
            <p className="leading-7 text-slate-700">
              We may update this Privacy Policy from time to time. If we make
              significant changes, we will update the “Last updated” date on
              this page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">12. Contact us</h2>
            <p className="leading-7 text-slate-700">
              If you have questions about this Privacy Policy or LenDen Notes,
              contact us at:
            </p>
            <p className="font-semibold text-teal-700">fxnepali@gmail.com</p>
          </section>
        </div>
      </section>
    </main>
  );
}
