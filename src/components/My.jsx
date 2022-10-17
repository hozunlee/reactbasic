import React from "react";
import Login from "./Login";
import Profile from "./Profile";

/**
 *
 * @returns
 */

// FIXME 나중엔 ssstion을 받지 않고 context로 관리함
const My = ({ session = {}, logout }) => {
    return (
        <div>
            {session.loginUser ? (
                <Profile session={session} logout={logout} />
            ) : (
                <Login />
            )}
        </div>
    );
};

export default My;
