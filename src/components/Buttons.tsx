export function LinkButton({ href, children }: { href: string; children: string }) {
    return (
        <a
            href={href}
            className="max-w-fit px-4 py-2 m-2 border-2 text-secondary border-secondary hover:bg-secondary hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
