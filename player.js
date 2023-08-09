export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 90;
        this.x = 0;
        this.y = 400;
        // this.image = player; same as below
        this.image = document.getElementById('player')
        this.speed = 0;
        this.maxSpeed = 10;
    }
    update(input){
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.x++;
        else if (input.includes('ArrowLeft')) this.x--;
        else if (input.includes('ArrowUp')) this.y--;
        else if (input.includes('ArrowDown')) this.y++;
        else this.speed = 0;

        // this.x++; if just move right

    }
    draw(context){
        context.fillStyle = '';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}