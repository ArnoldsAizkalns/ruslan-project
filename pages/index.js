import About from '@/components/About'
import Calculator from '@/components/calc/Calculator'
import Contact from '@/components/Contact'
import Header from '@/components/Header.jsx'
import Main from '@/components/Main'
import Partners from '@/components/Partners'
import Projects from '@/components/Projects'

export default function Home() {
	return (
		<>
			<Header />
			<Main />
			<Partners />
			<About />
			<Projects />
			<Calculator />
			<Contact />
		</>
	)
}
