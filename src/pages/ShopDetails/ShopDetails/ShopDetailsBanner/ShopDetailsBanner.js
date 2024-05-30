import React from 'react';
import { Link } from 'react-router-dom';

const ShopDetailsBanner = () => {
   return (
      <>
         <section className="shop-banner-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7">
                     <div className="shop-thumb-tab mb-30">
                        <ul className="nav" id="myTab2" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                 aria-selected="true"><img src="img/shop/details/thumb1.jpg" alt=""/> </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                 aria-selected="false"><img src="img/shop/details/thumb2.jpg" alt=""/></a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="profile-tab2" data-bs-toggle="tab" href="#profile1" role="tab"
                                 aria-selected="false"><img src="img/shop/details/thumb3.jpg" alt=""/></a>
                           </li>
                        </ul>
                     </div>
                     <div className="product-details-img mb-30">
                        <div className="tab-content" id="myTabContent2">
                           <div className="tab-pane fade show active" id="home" role="tabpanel">
                              <div className="product-large-img">
                                 <img src="img/shop/details/large1.jpg" alt=""/>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="profile" role="tabpanel">
                              <div className="product-large-img">
                                 <img src="img/shop/details/large2.jpg" alt=""/>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="profile1" role="tabpanel">
                              <div className="product-large-img">
                                 <img src="img/shop/details/large3.jpg" alt=""/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="product-details mb-30">
                        <div className="product-details-title">
                           <p>Obat</p>
                           <h1>Paracetamol</h1>
                           <div className="price details-price pb-30 mb-20">
                              <span>$700.00</span>
                              <span className="old-price">$820.00</span>
                           </div>
                        </div>
                        <p>Obat penurun panas dan pereda nyeri ringan hingga sedang, seperti sakit kepala, nyeri otot, nyeri gigi, dan nyeri menstruasi.</p>
                        <div className="product-cat mt-30 mb-30">
                           <span>Category: </span>
                           <Link to="/shop">Nyeri,</Link>
                           <Link to="/shop">Sakit kepala</Link>
                        </div>
                        <div className="product-details-action">
                           <form action="#">
                              <div className="plus-minus">
                                 <div className="cart-plus-minus"><input type="text" defaultValue="1" /></div>
                              </div>
                               {/* className="primary_btn btn-icon ml-0"><span>+</span>Hubungi kami */}
                               <Link to="/login" className="primary_btn btn-black" type="button">Tambah ke Keranjang</Link>
                               <Link to="/login" className="action-btn" type="submit"><i className="fas fa-heart"></i></Link>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopDetailsBanner;