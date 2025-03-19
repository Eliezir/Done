import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: IndexRoute,
});

function IndexRoute() {
	return (
		<div>
			<h1>Redirecting...</h1>
		</div>
	);
}
