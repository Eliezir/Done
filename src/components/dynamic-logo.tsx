export function DynamicLogo() {
	return (
		<div className="flex gap-[10px] ">
			<div className="relative w-8 h-8 bg-primary rounded transition-all duration-1000 ease-in-out">
				<img
					src="/logo/checkList.svg"
					alt="Logo"
					className="absolute top-[2px] left-[2px] min-w-[38px] min-h-[38px] "
				/>
			</div>
			<span className="text-primary atma-font font-bold text-3xl">
				Done.
			</span>
		</div>
	);
}
