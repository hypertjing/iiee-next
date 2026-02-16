export default function MembershipExpiredPage() {
    return (
        <main className="flex items-center justify-center bg-white px-4 p-[100px]">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl/30 p-6 text-center">
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ⏳
                </div>

                {/* Title */}
                <h1 className="text-xl font-semibold text-gray-900">
                    Membership Expired
                </h1>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600">
                    Your membership has expired. To continue accessing all
                    features, please renew your subscription.
                </p>

                {/* Actions */}
                <div className="mt-6 space-y-3">
                    {/* <Link
                        href="/billing"
                        className="block w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
                    >
                        Renew Membership
                    </Link>

                    <Link
                        href="/login"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                        Back to Login
                    </Link> */}
                </div>

                {/* Footer note */}
                <p className="mt-5 text-xs text-gray-400">
                    Need help? Contact support if you believe this is a mistake.
                </p>
            </div>
        </main>
    );
}
