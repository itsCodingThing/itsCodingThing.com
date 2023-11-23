// import { UnsplashSingleRandomPhotoResponse } from "@/types/unsplash";

import { random4DigitGen } from "./utils";

export async function fetchUnsplashImage() {
    return {
        description: "random pic from lorem ipsum",
        urls: {
            regular: `https://picsum.photos/seed/picsum${new Date().getTime() + random4DigitGen()}/600/500`,
        },
    };

    // try {
    //     const searchParams = new URLSearchParams([["query", "minimal"]]);
    //     const url = new URL(`https://api.unsplash.com/photos/random/?${searchParams}`);

    //     const response = await fetch(url, {
    //         headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`, "Accept-Version": "v1" },
    //     });
    //     const result = await response.json();

    //     return result as UnsplashSingleRandomPhotoResponse;
    // } catch {
    //     return {
    //         description: "random pic from lorem ipsum",
    //         urls: {
    //             regular: "https://picsum.photos/500/500",
    //         },
    //     };
    // }
}
