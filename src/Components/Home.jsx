import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="main-title">🎥 Welcome to Studio Ghibli World</h1>
        <p className="main-tagline">Explore the magic, art, and legacy of Japan’s most beloved animation studio.</p>
        <img
          src="https://1000logos.net/wp-content/uploads/2024/02/Studio-Ghibli-Logo.jpg"
          alt="Studio Ghibli Logo"
          className="hero-image"
        />
      </section>

      <section className="about-section">
        <h2>🌸 About Studio Ghibli</h2>
        <p>
          Studio Ghibli is a legendary Japanese animation studio founded in 1985 by **Hayao Miyazaki**, **Isao Takahata**, and **Toshio Suzuki**.
          It is best known for masterpieces such as <strong>Spirited Away</strong>, <strong>My Neighbor Totoro</strong>, and <strong>Princess Mononoke</strong>.
          The studio is world-renowned for its breathtaking hand-drawn animation, emotional storytelling, and deep environmental and philosophical themes.
        </p>
        <img
          src="https://imgs.search.brave.com/SWYUMKcAoI3lDTBwuRHYV2oZtvwfvrziLW3dZUrk28U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsY2FmZmVp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAxL3N0/dWRpby1naGlibGkt/bXVzZXVtLXRva3lv/LW1pdGFrYS1qYXBh/bi00NTQtODAweDUy/OS5qcGc"
          alt="Studio Ghibli Entrance"
          className="about-image"
        />
      </section>

      <section className="founders-section">
        <h2>🧑‍🎨 Meet the Founders</h2>
        <div className="founders-grid">
          <div className="founder-card">
            <img
              src="https://imgs.search.brave.com/Tggr8jgYM-6XQKEuwFdAon318nQF0P_quexUv2dDWxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUUmlNalJp/WkdFdE1EaGtZaTAw/TXpBeExXRXhNR1V0/T0dGbE1ESTRNVEZt/WVdJMVhrRXlYa0Zx/Y0djQC5qcGc"
              alt="Hayao Miyazaki"
            />
            <h3>Hayao Miyazaki</h3>
            <p>Co-founder, Director, Visionary behind many Ghibli classics like Spirited Away and Howl’s Moving Castle.</p>
          </div>
          <div className="founder-card">
            <img
              src="https://imgs.search.brave.com/YSsr5ASxsQ_x2ww5_OyHI_AFy5PK2JuBcFszMkVHQ20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk0/MDMyNzcxL2VzL2Zv/dG8vY2FubmVzLWZy/YW5jZS1kaXJlY3Rv/ci1pc2FvLXRha2Fo/YXRhLWlzLXBob3Rv/Z3JhcGhlZC1mb3It/c2VsZi1hc3NpZ25t/ZW50LW9uLW5vdmVt/YmVyLTctMjAxMC1p/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9M1VycF9WSTJh/S3FaQlE4UkRRX3JB/TkNkajA4ODNGNHEz/N3RWa09tWGdTcz0"
              alt="Isao Takahata"
            />
            <h3>Isao Takahata</h3>
            <p>Co-founder, known for Grave of the Fireflies and a gentle, humanist approach to storytelling.</p>
          </div>
          <div className="founder-card">
            <img
              src="https://imgs.search.brave.com/_MKt3aiJwZimWjv0vBbjXEwWBafgJINKlYcL-eAoyrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTMy/MDg2MzgwL3Bob3Rv/L2phcGFuZXNlLXBy/b2R1Y2VyLXRvc2hp/by1zdXp1a2ktcG9z/ZXMtb24tbWF5LTE4/LTIwMTYtZHVyaW5n/LWEtcGhvdG9jYWxs/LWZvci10aGUtZmls/bS10aGUtcmVkLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/RDRRQk5wUVVLOVpY/RlBoWENFZFV4UVhf/Y2V3SDJYSlVFNmF4/VWhNMjlnPQ"
              alt="Toshio Suzuki"
            />
            <h3>Toshio Suzuki</h3>
            <p>Producer and former President of Studio Ghibli, the heart of Ghibli’s management and legacy.</p>
          </div>
        </div>
      </section>

      <section className="ghibli-legacy">
        <h2>🏆 Awards & Legacy</h2>
        <p>
          Studio Ghibli has won **two Academy Awards**, a **Golden Bear**, **Golden Globe**, **BAFTA**, and dozens of international animation awards.
          Its works are celebrated for blending fantasy, nature, and humanity with unmatched artistic beauty.
        </p>
      </section>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Studio Ghibli Clone by Danish  🌟</p>
      </footer>
    </div>
  )
}

export default Home




// import React from 'react'

// function Home() {
//   return (
//     <div>
//         <h1>Home Page</h1>
//         <h1>Welcome To Ghibli Studio Clone </h1>
//         <p>You will gwt all the details about Ghibli studio</p>
//         <p>Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation studio based in Koganei, Tokyo. It was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after acquiring Topcraft's assets.
//  The studio is known for its high-quality filmmaking and artistry, with films such as Spirited Away, My Neighbor Totoro, and Princess Mononoke.

// The name "Ghibli" was chosen by Miyazaki from the Italian noun ghibli, which refers to a hot desert wind, symbolizing the idea that the studio would "blow a new wind through the anime industry".
//  Studio Ghibli has produced 25 feature-length films, with many ranking number one at the box office in Japan in the year of their release.

// The studio has a strong presence in the animation industry and has expanded its portfolio to include various media such as short subjects, television commercials, and two television films. Its work is often highly acclaimed by both critics and audiences and recognized with numerous awards, including two Academy Awards for Best Animated Feature, one Golden Globe Award for Best Animated Feature Film, one BAFTA Award for Best Animated Film, one Golden Bear, three Animage Grand Prix awards, and six Japan Academy Prizes.

// Studio Ghibli's films have garnered numerous awards and critical acclaim from film critics and animation experts worldwide. Spirited Away was awarded the Golden Bear as the Best Feature Film at the 52nd Berlin International Film Festival and won the 75th Academy Award® for Best Animated Feature Film. The studio's latest film, The Boy and the Heron, was awarded the Golden Globe Award, the BAFTA Film Award, and the Academy Award® for Best Animated Feature Film in 2024.

// The studio has a close relationship with the magazine Animage, which regularly runs exclusive articles on the studio and its members in a section titled "Ghibli Notes". Artwork from Ghibli's films and other works are frequently featured on the cover of the magazine.

// In March 2025, Studio Ghibli became part of the debate about artificial intelligence (AI) and creative ownership when OpenAI, an American AI research organization, released an image generator capable of mimicking the studio’s signature style. This led to concerns about unauthorized imitation and the future of human creativity.

// The studio's headquarters are in Kajino-chō, Koganei, Tokyo, Japan, and it has a number of key people, including Hayao Miyazaki (Honorary Chairman), Toshio Suzuki (chairman), Hiroyuki Fukuda (president), Kiyofumi Nakajima (vice president), and Gorō Miyazaki (director).

// Studio Ghibli has a net income of ¥3.43 billion (2023) and total assets of ¥31.179 billion (2023), with 190 employees (2023).
//  The studio is part of the Nippon Television Network Corporation (42.3%) and has a subsidiary called Studio Kajino.</p>
//     </div>
//   )
// }

// export default Home