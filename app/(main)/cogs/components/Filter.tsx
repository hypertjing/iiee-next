export function Filter1() {
    const isloggedin = true;
    const isadmin = true;
    const isverified = true;

    if (!isloggedin) {
        return <div>Not logged in</div>;
    }

    if (!isadmin) {
        return <div>Not an admin</div>;
    }

    if (!isverified) {
        return <div>Not verified</div>;
    }

    return <div>OK</div>;
}

export function Filter2() {
    const isloggedin = true;
    const isadmin = true;
    const isverified = true;

    if (isloggedin) {
        if (isadmin) {
            if (isverified) {
                return <div>OK</div>;
            } else {
                return <div>Not verified</div>;
            }
        } else {
            return <div>Not an admin</div>;
        }
    } else {
        return <div>Not logged in</div>;
    }
}
