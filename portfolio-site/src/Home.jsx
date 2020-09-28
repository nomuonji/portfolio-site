import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="eyecatch">
        <div className="eyecatch-text">
          <h3>welcome to Explore</h3>
          <h1>Portfolio</h1>
          <button className="btn">enter site</button>
        </div>
      </div>

      <div className="section">
        <div className="section-title">
          <h2>LINKS</h2>
          <p>以下にギャラリーへのリンクがあります。画像をクリックしてギャラリーを表示します。</p>
        </div>
          <a href="/about"><Item imgUrl={require('./assets/image/about.jpg')} title="about"/></a>
          <a href="/works"><Item imgUrl={require('./assets/image/works.jpg')} title="works"/></a>
          <a href="/blog"><Item imgUrl={require('./assets/image/blog.jpg')} title="blog"/></a>
          <a href="/contact"><Item imgUrl={require('./assets/image/contact.jpg')} title="contact"/></a>
      </div>

      <div className="section">
        <div className="profile-card">
          <div className="profile-text">
            <h5>yuto nomura</h5>
            <p>keio unv.</p>
            <p>フロントエンドエンジニア</p>
          </div>
          <img src={require('./assets/image/portfolio.PNG')} alt="portfolio"width="20%"/>
        </div>
      </div>

    </div>
  )

};

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.imgUrl} alt={props.title} />
      <h2>{props.title}</h2>
    </div>
  )
}

export default Home