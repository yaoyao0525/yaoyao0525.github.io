import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const movies = [
      {id: 1, title: 'The Lord of the Rings', introduction: "该系列电影讲述了黑暗魔君索伦在数千年前铸造了一枚具有无上权力的至尊魔戒，后来这枚魔戒辗转落到了天真无邪的男孩弗罗多的手里，弗罗多抵御住了魔戒的诱惑，在朋友们的帮助下最终前往末日山脉销毁了魔戒的故事。"},
      {id: 2, title: 'Flipped', introduction: "该片根据文德琳·范·德拉安南的同名原著小说改编，描述了青春期中男孩女孩之间的有趣战争。"},
      {id: 3, title: 'The Godfather', introduction: "该片改编自马里奥·普佐的同名小说，讲述了以维托·唐·柯里昂为首的黑帮家族的发展过程以及柯里昂的小儿子迈克如何接任父亲成为黑帮首领的故事。"},
      {id: 4, title: 'Waterloo Bridge', introduction: "该片讲述了陆军上尉克罗宁在休假中邂逅了芭蕾舞女郎玛拉，之后两人坠入爱河并互订终身的爱情故事。"},
      {id: 5, title: 'Titanic', introduction: "影片以1912年泰坦尼克号邮轮在其处女航时触礁冰山而沉没的事件为背景，讲述了处于不同阶层的两个人穷画家杰克和贵族女露丝抛弃世俗的偏见坠入爱河，最终杰克把生存的机会让给了露丝的感人故事。"},
      {id: 6, title: 'Spider-Man', introduction: "讲述了蜘蛛侠的生活因曝光身份而陷入混乱，甚至遭到了全世界民众的愤怒抗议，为改变这一切，蜘蛛侠前往寻求奇异博士的帮助，没料想，多元宇宙打开后更大的危机也随之而来的故事。"},
      {id: 7, title: 'Interstellar', introduction: "该片在物理学家基普·索恩的黑洞理论之上进行改编，主要讲述了一组宇航员通过穿越虫洞来为人类寻找新家园的冒险故事。"}
  ];
    return {movies};
  }

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}