import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Items from './components/Items';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Кожаный диван",
          img: "",
          desc:"Удобный кожаный диван, подходит для гостиной",
          category: "Диваны",
          price: "800"
        },
        {
        id: 2,
          title: "Журнальный столик",
          img: "https://example.com/coffeetable.jpg",
          desc: "Современный столик для журналов и чашек",
          category: "Столики",
          price: "150"
        },
        {
          id: 3,
          title: "Кухонный стул",
          img: "https://example.com/kitchenchair.jpg",
          desc: "Комфортабельный стул для кухни",
          category: "Стулья",
          price: "60"
        },
        {
          id: 4,
          title: "Книжный шкаф",
          img: "https://example.com/bookshelf.jpg",
          desc: "Просторный шкаф для книг и декора",
          category: "Шкафы",
          price: "400"
        },
        {
          id: 5,
          title: "Кровать",
          img: "https://example.com/bed.jpg",
          desc: "Уютная кровать с ортопедическим матрасом",
          category: "Кровати",
          price: "700"
        },
        {
          id: 6,
          title: "Комод",
          img: "https://example.com/chestofdrawers.jpg",
          desc: "Комод с множеством ящиков для хранения вещей",
          category: "Комоды",
          price: "250"
        }
      ]
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Main/>
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;