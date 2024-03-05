"use client";

import { useEffect, useState } from "react";

interface IMagicTypingProps {
    lines: string[];
}

interface IMagicTypingState {
    lines: string;
    index: number;
    reverse: boolean;
}

export default function MagicTyping({ lines }: IMagicTypingProps) {
    const [state, setState] = useState<IMagicTypingState>({ lines: "", index: 0, reverse: false });

    useEffect(() => {
        const interval = setInterval(() => {
            if (state.reverse) {
                setState((prev) => {
                    const newText = state.lines.slice(0, state.lines.length - 1);
             
                    if (state.lines.length === 0) {
                        let index = state.index;

                        if (index === lines.length - 1) {
                            index = 0;
                        } else {
                            index = index + 1;
                        }

                        return { ...prev, lines: newText, reverse: !prev.reverse, index };
                    }

                    return { ...prev, lines: newText };
                });
            } else {
                setState((prev) => {
                    const newText = lines[state.index].slice(0, state.lines.length + 1);
             
                    if (state.lines.length === lines[state.index].length) {
                        return { ...prev, lines: newText, reverse: !prev.reverse };
                    }

                    return { ...prev, lines: newText };
                });
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [lines, state.index, state.lines, state.reverse]);

    return (
        <h1 className="text-4xl md:text-6xl text-secondary">
            <span>
                {state.lines}
                <span>|</span>
            </span>
        </h1>
    );
}
