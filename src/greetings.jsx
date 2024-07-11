
function divContainer() {
    return <div>
                <button>hello there, tap me bro</button>
                <button className="button2">ME TOO</button>
                <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot; </h1>
            </div>;
}



function Greeting() {
    return divContainer();
    // return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot; </h1>;
}

export { Greeting };