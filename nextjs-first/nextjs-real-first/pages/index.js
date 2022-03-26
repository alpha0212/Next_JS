import NavBar from "../component/NavBar";

export default function Home(){
    return (
        <div>
            <NavBar />
            <h1 className="active">Hello</h1>
            <style jsx>{`
                a {
                color: white;
                }
            `}</style>
        </div>
    )
}