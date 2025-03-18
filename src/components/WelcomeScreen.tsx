import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Icon } from '@iconify/react';

interface WelcomeScreenProps {
	onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
	const [animationState, setAnimationState] = useState<
		"initial" | "text-visible" | "complete"
	>("initial");
	const [initialText, setInitialText] = useState<string>("");
	const [displayText, setDisplayText] = useState<string>("");
	const [showDotEffect, setShowDotEffect] = useState<boolean>(false);
	const initialTextFull = useRef<string>("Welcome, it's time to get things");
	const textSequence = useRef<string[]>(["finished", "completed", "Done.."]);
	const currentIndex = useRef<number>(0);
	const charIndex = useRef<number>(0);
	const initialCharIndex = useRef<number>(0);
	const isDeleting = useRef<boolean>(false);
	const typingSpeed = useRef<number>(50);
	const initialTypingComplete = useRef<boolean>(false);

	useEffect(() => {
		const textTimer = setTimeout(() => {
			setAnimationState("text-visible");
		}, 1200);

		return () => clearTimeout(textTimer);
	}, []);

	useEffect(() => {
		if (animationState !== "text-visible") return;

		const typeInitialText = () => {
			if (initialCharIndex.current < initialTextFull.current.length) {
				setInitialText(
					initialTextFull.current.substring(0, initialCharIndex.current + 1),
				);
				initialCharIndex.current += 1;

				const timerId = setTimeout(typeInitialText, 100);
				return () => clearTimeout(timerId);
			}
			initialTypingComplete.current = true;
			const timerId = setTimeout(typeWriter, 500); 
			return () => clearTimeout(timerId);
		};

		const typeWriter = () => {
			if (!initialTypingComplete.current) return;

			const currentWord = textSequence.current[currentIndex.current];
			const isLastWord =
				currentIndex.current === textSequence.current.length - 1;

			if (isLastWord && charIndex.current === currentWord.length) {
				setShowDotEffect(true);
				return;
			}

			if (!isDeleting.current && charIndex.current <= currentWord.length) {
				setDisplayText(currentWord.substring(0, charIndex.current));
				charIndex.current += 1;
				typingSpeed.current = 100;

				if (charIndex.current > currentWord.length) {
					typingSpeed.current = 2000;

					if (isLastWord) {
						return;
					}

					isDeleting.current = true;
				}
			} else if (isDeleting.current && charIndex.current >= 0) {
				setDisplayText(currentWord.substring(0, charIndex.current));
				charIndex.current -= 1;
				typingSpeed.current = 50;

				if (charIndex.current === 0) {
					isDeleting.current = false;
					currentIndex.current =
						(currentIndex.current + 1) % textSequence.current.length;
					typingSpeed.current = 500;
				}
			}

			const timerId = setTimeout(typeWriter, typingSpeed.current);
			return () => clearTimeout(timerId);
		};

		const timerId = setTimeout(typeInitialText, 100);
		return () => clearTimeout(timerId);
	}, [animationState]);

	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center noise-bg z-50 w-full h-screen">
			<div className="text-center max-w-5xl px-4 relative z-10 flex flex-col items-center justify-center">
				<div className="mb-12 space-y-1 text-center">
					<h1
						className={cn(
							"welcome-text transition-opacity duration-1000 ease-in-out atma-font font-medium text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
							animationState === "initial" ? "opacity-0" : "opacity-100",
						)}
					>
						{initialText}
						<span className="typing-container mx-4">
							<>
								<span
									className={cn(
										"typing-text transition-all duration-700 ease-in-out",
										showDotEffect && "text-primary font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
									)}
								>
									{displayText}
								</span>
								{!showDotEffect && <span className="cursor-blink" />}
							</>
						</span>
					</h1>
				</div>
			</div>

			<div
				className={cn(
					"absolute bottom-10 flex flex-col items-center transition-all duration-1000",
					animationState === "initial" ? "opacity-0" : "opacity-100",
				)}
			>
				<button
					type="button"
					onClick={onComplete}
					onKeyUp={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							onComplete();
						}
					}}
					aria-label="Get Started"
				>
					<Icon icon="line-md:arrow-small-down" className="animate-bounce text-primary" width="64" height="64"  />
				</button>
			</div>
		</div>
	);
}
