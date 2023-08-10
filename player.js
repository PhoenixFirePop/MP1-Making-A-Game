export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 90;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0 //vertical speed/velocity
        this.weight = 1 //will make the character have a sense of gravity (fall when in the air)
        this.image = document.getElementById('player')  // this.image = player; same
        this.speed = 0;
        this.maxSpeed = 10;
    }
    update(input){

        // //basic all directional movement - a bit too slow
        // if (input.includes('ArrowRight')) this.x++;
        // else if (input.includes('ArrowLeft')) this.x--;
        // else if (input.includes('ArrowUp')) this.y--;
        // else if (input.includes('ArrowDown')) this.y++;
        // else this.speed = 0;

        //side movement
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        //to make sure the char stays within game area
        if(this.x < 0) this.x = 0;
        if(this.x > this.gamewidth - this.width) this.x = this.game.width - this.width;
        //jump
        else if (input.includes('ArrowUp') && this.onGround()) this.vy -= 10;
        this.y += this.vy;
        if(!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
        // else if (input.includes('ArrowDown')) this.y++;



    }
    draw(context){
        // context.fillStyle = '';
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    onGround(){
        return this.y >= this.game.height - this.height;
    }
}