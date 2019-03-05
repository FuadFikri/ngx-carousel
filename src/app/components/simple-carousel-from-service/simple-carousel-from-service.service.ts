import {Injectable , EventEmitter, Output} from "@angular/core";

@Injectable()
export class SimpleCarouselService{

    private images = [
        "https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png",
        "http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1",
        "https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg",
        "https://www.losminionsaldia.com/images/mas-minions/minion.png"
    ];

    @Output() getImagesEmitter = new EventEmitter();

    constructor() {

    }


    getImages = () => {
        this.getImagesEmitter.emit(this.images);
    }

}