import React from 'react';
import { Grid } from "@material-ui/core";
import './About.scss';
import Snsbar from './Snsbar'

const About = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>about</h2>
      </div>
      <div className="profile">
        <img src={require('./assets/image/portfolio2.PNG')} alt="portfolio" />
        <h3>野村　優斗</h3>
        <p>Web engineer</p>
        <p>慶應義塾大学　法学部政治学科　３年 法律や政治について大学で学びながら、IT分野に興味を持ち、独学でプログラミングを始める。現在はインターンやアルバイトなどを通して、様々な経験を積みながらスキルアップ。</p>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <div className="about-content">
            <h3>Contact</h3>
            <Snsbar />
          </div>
          <div className="about-content">
            <h3>skills</h3>
            <div className="skill">
              <p>html : </p>
              <meter min="0" max="100" value="90">90%</meter>
            </div>
            <div className="skill">
              <p>css : </p>
              <meter min="0" max="100" value="80">80%</meter>
            </div>
            <div className="skill">
              <p>javascript : </p>
              <meter min="0" max="100" value="80">80%</meter>
            </div>
            <div className="skill">
              <p>scss : </p>
              <meter min="0" max="100" value="80">80%</meter>
            </div>
            <div className="skill">
              <p>vue.js : </p>
              <meter min="0" max="100" value="80">80%</meter>
            </div>
            <div className="skill">
              <p>react.js : </p>
              <meter min="0" max="100" value="60">60%</meter>
            </div>
            <div className="skill">
              <p>firebase : </p>
              <meter min="0" max="100" value="70">70%</meter>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={7}>
          <div className="about-content">
            <h3>Experiences</h3>
            <div className="experience">
              <p>慶應義塾大学法学部政治学科入学</p>
              <p>2018/4 -</p>
            </div>
            <div className="experience">
              <p>独学でプログラミングの勉強を開始</p>
              <p>2019 -</p>
            </div>
            <div className="experience">
              <p>モバイルアプリ開発会社でアルバイト</p>
              <p>2019/4 - 2019/10</p>
            </div>
            <div className="experience">
              <p>大学生プログラミングコミュニティ「Geek Salon」入会</p>
              <p>2020/6 - 2020/9</p>
            </div>
            <div className="experience">
              <p>Geek Salon似てプロダクト（<a href="https://amabie-fd1f1.firebaseapp.com/">Collectio</a>）を開発、デプロイ</p>
              <p>2020/9</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
};

export default About