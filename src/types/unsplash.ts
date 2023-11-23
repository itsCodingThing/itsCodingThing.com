interface UnsplashSinglePhotoResponse {
    id: string;
    created_at: Date;
    updated_at: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    downloads: number;
    likes: number;
    liked_by_user: boolean;
    public_domain: boolean;
    description: string;
    exif: Exif;
    location: Location;
    tags: Tag[];
    urls: Urls;
    links: UnsplashSinglePhotoResponseLinks;
    user: User;
    current_user_collections: CurrentUserCollection[];
}

interface CurrentUserCollection {
    id: number;
    title: string;
    published_at: Date;
    last_collected_at: Date;
    updated_at: Date;
    cover_photo: null;
    user: null;
}

interface Exif {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
}

interface UnsplashSinglePhotoResponseLinks {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

interface Location {
    city: string;
    country: string;
    position: Position;
}

interface Position {
    latitude: number;
    longitude: number;
}

interface Tag {
    title: string;
}

interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    links: UserLinks;
}

interface UserLinks {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
}

export interface UnsplashSingleRandomPhotoResponse {
    id: string;
    created_at: Date;
    updated_at: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    downloads: number;
    likes: number;
    liked_by_user: boolean;
    description: string;
    exif: Exif;
    location: Location;
    urls: Urls;
    links: UnsplashSingleRandomPhotoResponseLinks;
    user: User;
    current_user_collections: CurrentUserCollection[];
}

interface CurrentUserCollection {
    id: number;
    title: string;
    published_at: Date;
    last_collected_at: Date;
    updated_at: Date;
    cover_photo: null;
    user: null;
}

interface Exif {
    make: string;
    model: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
}

interface UnsplashSingleRandomPhotoResponseLinks {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

interface Location {
    name: string;
    city: string;
    country: string;
    position: Position;
}

interface Position {
    latitude: number;
    longitude: number;
}

interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    links: UserLinks;
}

interface UserLinks {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
}
