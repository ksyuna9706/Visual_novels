import './Article.css';
// import fon from "./d897a3b0786c734bfe4ab8fe81c6c3fadbbd94c8.jpg";
function Article(){
    return(
        <div className='article' >
            <div className="text">
              <h1 className='article2'>
                Открой свою вселенную. <br />
               <span>Твоя история.</span> <br />
                Твой выбор.
            </h1>
            <h3 className='vis'>Визуальные новеллы (Visual Novels, VN) — это уникальный жанр на стыке литературы, кинематографа и видеоигр.
               В отличие от многих игр, где сюжет служит лишь фоном для геймплея, здесь повествование является главным двигателем. Благодаря системе выборов история может разветвляться, ведя к совершенно разным событиям, сценам и концовкам — от счастливых до трагичных.
            </h3>
        
            <div className="otz">
                <div className="mod"><p className='bld'>300+</p><p>моделей мерча с уникальным стилем</p></div>
                <div className="proj"><p className='bld'>200+</p><p>законченных проектов</p></div>
                <div className="sailors"><p className='bld'>500+</p><p>счастливых покупателей</p></div>
            </div>
            </div>
              <button className='btn'>Выбрать историю</button>  
        </div>  
    )
}
export default Article;