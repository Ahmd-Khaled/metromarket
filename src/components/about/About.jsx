import AboutSection from '../aboutSection/AboutSection';
import Banner from '../banner/Banner';
import styles from './about.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <Banner imgSrc="about-us-.jpg" />
            <div className='pageContainer'>
                <div className={styles.aboutLinkPath}>Home &gt; About Us</div>
                <div className={styles.aboutInfo}>
                    <p>Metro Markets is part of the renowned and long established Al Mansour Holding Group. As a business entity, serving customers is at the heart of everything we do. We are a large organization, touching millions of people's lives every day. This scale gives us an opportunity to make a positive difference to some of the biggest challenges facing the country. As the founders, the highly acclaimed supermarket chains – Fresh Food Market & Kheir Zaman, we significantly contributed in developing the concept of food retailing in Egypt.</p>
                </div>
                <AboutSection
                    direction={""}
                    imgHeight={""}
                    aboutSecTtl={"INCEPTION"}
                    aboutSecParg={"Not long ago, shopping in Egypt has been quite a tedious, time-consuming task involving several weekly visits to a huge number of small, specialized shops. With changes in today’s lifestyle, consumers have developed a taste for quality packaged goods, and more women – the typical house managers- have joined the work force. To fulfill consumers’ needs, Mansour Holdings believed it was time to introduce a more convenient means of shopping in Egypt. An initial in-depth survey of the country’s shopping scene revealed that although some small chain supermarkets did exist, there was plenty of room for improvement. Mansour Holdings aimed to round off its distribution operation by introducing a new supermarket chain, which would eventually grow to over 96 outlets nationwide."}
                    aboutSecImg={"about2.jpg"}
                />
                <AboutSection
                    direction={"reverse"}
                    imgHeight={""}
                    aboutSecTtl={"OPERATIONS"}
                    aboutSecParg={"The first ten Metro supermarkets swung into business in both Cairo and Alex, while the target was to open at least eight more stores in the following years. By the beginning of 2009, Metro reached a network of 36 stores covering five different governorates including Cairo, Giza, Alex, Mansoura, Ismailia, Hurghada and Sharm El-Sheikh. Today, Metro has become the biggest food retail chain in the market with a network of 48 outlets servicing several governorates nationwide, further solidifying Metro’s position as the biggest chain supermarket in Egypt."}
                    aboutSecImg={"about3.jpg"}
                />
                <AboutSection
                    direction={""}
                    imgHeight={""}
                    aboutSecTtl={"MILESTONES"}
                    aboutSecParg={"Under the umbrella of Metro Market, Mansour Holdings started the Kheir Zaman chain in 2006 which offers a variety or food products at affordable prices to satisfy the lower income segment of the consumers. Today the chain has grown to reach a total of 38 outlets and will continue to grow in the future. This is in conjunction with Mansour Holding’s Corporate Social Responsibility mission. In 2010 Metro Markets added “Fast” to “Freshness” when 2 Mini Metro stores opened in 6th of October City and Heliopolis. Mini Metro stores are responding to the 18 – 30 age groups who want high quality and fast service for a limited range of items. The new chain offers more than 22 different varieties of sandwiches that are made on the spot; in addition to ready to take away freshly brewed coffees and teas as well as a wide range of chocolates sweets and biscuits. Mini Metro reached a total of 10 outlets and more shops are planned to open in the near future."}
                    aboutSecImg={"about5.jpg"}
                />
                <AboutSection
                    direction={"reverse"}
                    imgHeight={""}
                    aboutSecTtl={"AWARDS"}
                    aboutSecParg={"The volume of sales and high levels of repeat visits are a shining evidence of Metro’s success. Customers’ response has exceeded the company’s expectations, reflecting customer appreciation for a quicker and more pleasant shopping experience. On July 1st, 2002, Metro received a prestigious award during the International Quality Convention that was held in Geneva. Metro was presented with the Century International Quality Era Award in recognition of its outstanding commitment to quality and excellence in the realm of customer satisfaction and leadership. Metro was the only Egyptian company out of companies from 163 countries to receive an award during that year. In 2012 and for the fourth consecutive time, Metro has been voted by the Superbrands Council and over 2500 Marketing professional in Egypt as a Superbrand. Brands that have attained “Superbrands” status have been selected from the brands most highly rated by the independent Superbrands council from a list of 3000 brands in Egypt."}
                    aboutSecImg={"about6.jpg"}
                />
                <AboutSection
                    direction={""}
                    imgHeight={"100"}
                    aboutSecTtl={"METRO’S FUTURE"}
                    aboutSecParg={"Metro aims to capitalize on the rapid growth achieved by channeling the increasing buying power, in order to boost efficiency, offer value for money to the loyal customer base, and plan to open new branches to reinforce Metro’s presence."}
                    aboutSecImg={"about9.png"}
                />
            </div>
        </section>
    )
}

export default About;