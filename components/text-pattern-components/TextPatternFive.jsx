import Image from "next/image";

const TextPatternFive = () => {
    return (
      <section className='imod-text-5 sectionRow' data-sectionname='text-5'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutTxt5Hdr'
              runat='server'>
              <h2>50/50 Split Text Area</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 col-sm-6 col-md-6 sectionContent leftCol emptyCheck'
              id='ContentMiddleLayoutText5Left'
              runat='server'>
              <Image
                src='/interior-rect3.jpg'
                alt='Teens enjoying a picnic outside'
                width={800}
                height={500}
                style={{width: '100%'}}
              />
              <h3>Left Column Header</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ultricies felis ut libero rhoncus, ac tristique
                felis mattis. Pellentesque vel magna in diam dictum convallis eu
                eu tellus. Fusce fermentum libero non est finibus rhoncus. Etiam
                feugiat diam vitae massa pulvinar hendrerit.
              </p>
              <p>
                Ut tempus nisl vel tempor tristique. Maecenas leo nisl, accumsan
                vel hendrerit ut, malesuada consectetur risus. Nam commodo
                commodo dictum. Phasellus porttitor ipsum quis libero
                condimentum pellentesque. Phasellus at euismod turpis. Vivamus
                convallis eleifend velit.
              </p>
            </div>
            <div
              className='col-xs-12 col-sm-6 col-md-6 sectionContent rightCol emptyCheck'
              id='ContentMiddleLayoutText5Right'
              runat='server'>
              <Image
                src='/interior-rect1.jpg'
                alt='Succulent plants'
                width={800}
                height={500}
                style={{width: '100%'}}
              />
              <h3>Right Column Header</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ultricies felis ut libero rhoncus, ac tristique
                felis mattis. Pellentesque vel magna in diam dictum convallis eu
                eu tellus. Fusce fermentum libero non est finibus rhoncus. Etiam
                feugiat diam vitae massa pulvinar hendrerit.
              </p>
              <p>
                <a href='#' className='button'>
                  Example Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default TextPatternFive;