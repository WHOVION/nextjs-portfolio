// // this is going to be our /about
// // import css module
// import styles from '../styles/About.module.css'

// // when making files, in pages, name should be not caps

// const About = () => {
//     return ( 
//         <div>
//             <h1>About Me</h1>

//             {/* more than one style can use string interpolation */}
//             <p className={`${styles.test} ${styles.cap}`}>I am now a super cool software engineer, Yeah</p>

//             <p>{`don't use apostrophes unless they are in backticks`}</p>

//             <h2 style={{backgroundColor:'red', fontSize:'20px'}}>I am a different color</h2>
//             {/* styled jsx is great for conditional rendering */}
//             <style jsx>{`
//                 h2 {
//                     color: purple;
//                 }
//             `}</style>

//             {/* two ways of rendering images: stored locally and a url */}
//             <img 
//                 src='/next.svg'
//                 alt='logo of my nex favorite framework'
//             />

//             {/* getting an image from outside source */}
//             <img 
//                 src='https://placekitten.com/300/600'
//                 alt='a magnificient creature'
//             />
//         </div>
//      );
// }
 
// export default About;