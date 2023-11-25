import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
          <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });
    return (
      <div>
        {/* mở header */}
        <div className="Nen">
            <div className="row2 g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Welcome <span className="text-primary">đến với</span> Tiệm Giày Nhà Tui</h1>
                    <p className="logan">Hãy shopping một cách như bạn không nghèo.</p>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <div className="owl-carousel header-carousel">
                        <div className="owl-carousel-item">
                        {/* <img className="img-fluid" src="model.png" alt=""/> */}
                        </div>
                        <div className="owl-carousel-item">
                        {/* <img className="img-fluid" src="img/carousel-2.jpg" alt=""/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* đóng header */}
        <div className="align-center">
          <h2 className="text-center">Sản phẩm </h2>
          {newprods}
        </div>
        {this.state.hotprods.length > 0 ?
          <div className="align-center">
            <h2 className="text-center">Sản phẩm mới</h2>
            {hotprods}
          </div>
          : <div />}
                          {/* SECTION 1.... */}
                          <section className="bg-light" id="team">
                    <div className="container">
                        <div className="kkk" data-wow-delay="0.1s" style={{ maxWidth: 1870 }}>
                            <h1 className="mb-3">Các seller</h1>
                            <p>Niềm vui của chúng tôi là giúp khách hàng đi trên đôi giày thoái mái và tôn vẻ đẹp của mình.</p>
                        </div>
                        <div className="row rounded">
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img classname="img-fluid" src="/TK.png" style={{ width: 250, height: 250, borderRadius: '12px' }} alt />
                                    <div className='huhu'>
                                        <h4>Tuấn Kiệt</h4>
                                        <p className="text-muted">2174802010032</p>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img classname="img-fluid" src="/QD.png" style={{ width: 250, height: 250, borderRadius: '12px' }} alt />
                                    <div className='huhu'>
                                        <h4>Quang Duy</h4>
                                        <p className="text-muted">2174802010033</p>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img classname="img-fluid" src="/GL.png" style={{ width: 250, height: 250, borderRadius: '12px' }} alt />
                                    <div className='huhu'>
                                        <h4>Gia Linh</h4>
                                        <p className="text-muted">2174802010038</p>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img classname="img-fluid" src="/DA.png" style={{ width: 250, height: 250, borderRadius: '12px' }} alt />
                                    <div className='huhu'>
                                        <h4>Diệu Ái</h4>
                                        <p className="text-muted">2174802010043</p>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img classname="img-fluid" src="/H.png" style={{ width: 250, height: 250, borderRadius: '12px' }} alt />
                                    <div className='huhu'>
                                        <h4>Tuấn Khanh</h4>
                                        <p className="text-muted">21748020100</p>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SECTION  */}
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;