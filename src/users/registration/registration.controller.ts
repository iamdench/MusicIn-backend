import {Controller, Get, Param, Query} from '@nestjs/common';
import {User} from "../schemas/user.schema";
import {RegistrationService} from "./registration.service";

@Controller('registration')
export class RegistrationController {

    constructor(private readonly registrationService: RegistrationService) {
    }


    @Get('user/:username')
    getOneByName(@Param ('username') username: string): Promise<User>{
        return this.registrationService.findOneByName(username);
    }

    @Get('spotify')
    getOneBySpotifyId(@Query('spotifyLink') spotifyLink: string): Promise<User>{
        return this.registrationService.findOneBySpotifyId(spotifyLink);
    }

    @Get('user')
    getOneByEmail(@Query ('email') email: string): Promise<User>{
        return this.registrationService.findOneByEmail(email);
    }

}

