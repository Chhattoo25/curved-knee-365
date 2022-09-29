import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import styles from "./PopularCompany.module.css"

const PopularCompany = () => {
    const popular=[
        {
            id:1,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/bc446d4f68e46da84af03344401f5204",
            name:"Tech Mahindra",
            rating:4,
            noofreview:"6,721 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:2,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/96a94a53132c2068f83026b8bfe26f86",
            name:"Indeed",
            rating:4,
            noofreview:"1,105 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:3,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/6dab2f9e01e4bb467ce4416015c323e8",
            name:"Kotak Mahindra Bank",
            rating:4,
            noofreview:"10,112 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:4,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/5bb93720f8b97a1263c85e1fb1c75fe9",
            name:"Tata Aia Life",
            rating:3,
            noofreview:"487 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:5,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/7b9cdd7bc283efa5c6031775dd62b1eb",
            name:"Citi",
            rating:4,
            noofreview:"18,767 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:6,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/aaa1b2a81cca5e346b6803b561070d4f",
            name:"HDB FInancial Services",
            rating:3,
            noofreview:"2,027 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:7,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c8f427fe261be5c5bdc628e88abebb43",
            name:"Siemens",
            rating:4,
            noofreview:"5,172 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        },
        {
            id:8,
            image:"	https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/5335229f1b22e90f1e5eafb892704339",
            name:"Indigo Airlines",
            rating:4,
            noofreview:"420 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        }
        ,  {
            id:9,
            image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e6c5eda7fc206158e9a85cd706f7ae9f",
            name:"Muthoot Finance",
            rating:4,
            noofreview:"3,056 reviews",
            salaries:"Salaries",
            questions:"Questions",
            openjobs:"Open jobs"
        }
    ]

  

  return (
    <div className={styles.container}>
        {popular.map((item)=>(
            <div style={{marginTop:'10px'}} >
            
          <div className={styles.image_rating}>
            <div style={{boxShadow:'4px 4px 1px whitesmoke ' ,borderRadius:'8px'}}>
                <img src={item.image} className={styles.popular_company_image} width='40px' height={'40px'}/>
            </div>
            <div >
            <div style={{fontWeight:'bold'}}>{item.name}</div>
            <div className={styles.rating_views}>
                
                <div>
                     { new Array(item.rating).fill(1).map((e)=>(
                        <StarIcon color='purple'/>
                    ))}
                    </div>
                <div className={styles.noofreview}>{item.noofreview}</div>
            </div>
            </div>
         
          </div>
          <div className={styles.question_container}>
            <li>{item.salaries}</li>
            <li>{item.questions}</li>
            <li>{item.openjobs}</li>
          </div>
          
            </div>
        ))}
    </div>
  )
}

export default PopularCompany