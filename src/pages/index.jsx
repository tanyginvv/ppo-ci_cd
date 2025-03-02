import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">HealthTrack</div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-600 transition">О нас</Link>
            <Link to="/products" className="hover:text-blue-600 transition">Продукты и партнеры</Link>
            <Link to="/support" className="hover:text-blue-600 transition">Тех.Поддержка</Link>
          </div>
          <button className="md:hidden" id="menuBtn">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" className="pt-20">
        <div className="relative h-[600px] overflow-hidden">
          <video autoplay muted loop className="video-background">
            <source src="vecteezy_a-woman-running-in-the-city-at-night_52350538.mov" type="video/mp4" />
            Ваш браузер не поддерживает тег видео.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center content">
            <div className="container mx-auto px-4 text-white">
              <h1 className="text-5xl font-bold mb-6">HealthTrack Solutions</h1>
              <p className="text-xl mb-8">Лидеры в инновациях здравоохранения с 2010 года</p>
              <Link to="/products" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition">Узнать больше</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Добавьте остальные секции аналогично */}

    </main>

    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Решения HealthTrack</h3>
            <p className="text-gray-400">Трансформируем здравоохранение через инновации</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">О нас</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition">Продукты и партнеры</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition">Тех.Поддержка</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Свяжитесь с нами</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Layout>
)

export default IndexPage
