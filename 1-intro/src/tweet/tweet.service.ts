import { Get, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  tweets: { name: string; id: number; tweet: string }[]=[
    {name:'nan', id:1, tweet:'I am coming'}
    {name:'nan', id:2, tweet:'dance'}
    {name:'nan', id:1, tweet:'I am coming too'}
  ]
  constructor(private readonly userService: UsersService) {}
  getUserTweets(id: number) {
    const user = this.userService.getUserById(id)
    return this.tweets.map((t)=>{
        return {name:user?.name, tweet:t.tweet}
    })
  }
}
