import React from 'react';
import Button from '@material-ui/core/Button';
import './Works.scss';

const Works = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>works</h2>
      </div>

      <div className="work-container">
        <div className="work">
          <a href="https://amabie-fd1f1.firebaseapp.com/"><img src={require('./assets/image/collectio.png')} alt="collectio"/></a>
          <p>「Collectio」</p>
          <p>〜みんなで読む読書〜</p>
          <p>本から学ぶこと、学んだことをメモして共有するアプリケーションです。フレームワークにvue.js、データベースにfirebaseを使用して、開発したものです。</p>
          <a href="https://amabie-fd1f1.firebaseapp.com/"><Button variant="outlined" >DISCOVER MORE</Button></a>
        </div>
        <div className="work">
          <a href="/"><img src={require('./assets/image/portfolio-site.png')} alt="portfolio-site"/></a>
          <p>Portfolio</p>
          <p>このサイト</p>
          <p>このサイトはReactの練習を兼ねて作成しました。ボタンや入力フォーム、グリッドなどをMaterial-UIを使用し、その他の部分はscssを使用してレイアウトしました。</p>
          <a href="/"><Button variant="outlined" >DISCOVER MORE</Button></a>
        </div>
      </div>
    </div>
  )

};

export default Works