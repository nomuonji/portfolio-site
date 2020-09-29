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
          <h3>「Collectio」</h3>
          <h4>〜みんなで読む読書〜</h4>
          <p>本から学ぶこと、学んだことをメモして共有するアプリケーションです。フレームワークにvue.js、データベースにfirebaseを使用して、開発したものです。</p>
          <p>言語：html, css(scss), javascpript<br />フレームワーク：vue.js, bootstrap<br />ライブラリ：vuex<br />データベース、認証、ログイン機能、ホスティング：firebase<br />バージョン管理：github</p>
          <a href="https://amabie-fd1f1.firebaseapp.com/"><Button variant="outlined" >DISCOVER MORE</Button></a>
        </div>
        <div className="work">
          <a href="/"><img src={require('./assets/image/portfolio-site.png')} alt="portfolio-site"/></a>
          <h3>Portfolio</h3>
          <h4>このサイト</h4>
          <p>このサイトはReactの練習を兼ねて作成しました。ボタンや入力フォーム、グリッドなどをMaterial-UIを使用し、その他の部分はscssを使用してレイアウトしました。</p>
          <p>言語：html, css(scss), javascpript<br />フレームワーク：react.js, materialUI<br />ホスティング：firebase</p>
          <a href="/"><Button variant="outlined" >DISCOVER MORE</Button></a>
        </div>
      </div>
    </div>
  )

};

export default Works