export class UpdateUserDto {
    readonly email: string;
    readonly password: string;
    readonly username: string;
    readonly spotifyLink: string;
    readonly spotifyId: string;
    readonly myLikes: number;
    readonly iLiked: string[];
    readonly likedMe: string[];
}
