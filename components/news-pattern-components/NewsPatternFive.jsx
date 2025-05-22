import Image from "next/image";

const NewsPatternFive = () => {
    return (
      <section className='imod-news-5 sectionRow' data-sectionname='news-5'>
        <div className='sectionBkgdWrap'>
          <div
            className='fullImg sectionBkgd'
            id='ContentMiddleLayoutImgNews5'
            runat='server'>
            <div className='snippetrow'></div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutNews4Hdr'
              runat='server'>
              <h2>News Pattern #5</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutNews4'
              runat='server'>
              <div className='newsWrapper'>
                <div className='newsRow clearfix'>
                  <div className='col-sm-12 col-md-6 newsItem horiz odd'>
                    <div className='newsInner'>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-news1-400x300.jpg)'}}>
                        <Image
                          src='/home-news1-400x300.jpg'
                          alt=''
                          width={400}
                          height={300}
                          style={{width: '100%'}}
                        />
                      </div>
                      <div className='text'>
                        <div className='title'>
                          Lorem ipsum consectetur adipiscing elit
                        </div>
                        <div className='preview'>
                          Quisque in enim non leo laoreet luctus. Nunc volutpat
                          purus ante, ut laoreet est vehicula ac phasellus
                          congue.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-6 newsItem horiz'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news4-400x300.jpg)'}}>
                          <Image
                            src='/home-news4-400x300.jpg'
                            alt=''
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                          />
                        </div>
                        <div className='text'>
                          <div className='title'>Lorem ipsum dolor sit amet</div>
                          <div className='preview'>
                            Nunc volutpat purus ante, ut laoreet est vehicula
                            ac. Phasellus congue libero eu diam pellentesque
                            consectetur.
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionBtn emptyCheck'
              id='ContentMiddleLayoutNews5Btn'
              runat='server'>
              <div className='viewAll'>
                <a href='#'>
                  <span>View All News</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default NewsPatternFive;