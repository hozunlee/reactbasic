import { useState } from "react";

export const Hello = ({ name, isMale, children, age, count, plusCount }) => {
    console.log("@@@@@@@@@@@@hello");
    // boolean type의 경우 is 를 붙이는게 좋다.
    const [isActive, setActive] = useState(false);

    return (
        <>
            <h1>
                Hello, {name} {age && (isMale ? "군" : "양")}
                {age ? `(${age})` : null}
            </h1>
            {children}
            <p>
                회원등급 : {isActive ? "정" : "준"}회원 - {count}{" "}
            </p>
            <button onClick={() => setActive(!isActive)}>toggle</button>
            <button onClick={plusCount}>카운타</button>
        </>
    );
};
