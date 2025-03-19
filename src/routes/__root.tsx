import { createRootRoute, redirect } from "@tanstack/react-router";

export const Route = createRootRoute({
	beforeLoad: ({ location }) => {
		if (location.pathname !== "/") {
			return;
		}

		// TODO: Replace with actual checks for first login and authentication

		const isFirstLogin = true;
		const isLoggedIn = true;

		if (isFirstLogin) {
			throw redirect({
				to: "/onboarding/welcome",
				replace: true,
			});
		}
		if (!isLoggedIn) {
			throw redirect({
				to: "/auth/login",
				replace: true,
			});
		}
		throw redirect({
			to: "/app",
			replace: true,
		});
	},
});
