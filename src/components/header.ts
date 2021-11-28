const html =
`
<header class="main-header">
    <div class="main-header-box">
        <div class="wrap row">
            <div class="profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 64"><title>logo</title><g id="레이어_2" data-name="레이어 2"><g class="icon-l1" id="logo-icon" data-name="레이어 1"><polygon points="0 0 0 64 64 64 0 0"></polygon><rect x="64" width="64" height="16"></rect><rect x="64" y="24" width="64" height="16"></rect><rect x="64" y="48" width="64" height="16"></rect><path d="M160,0h0a32,32,0,0,0-32,32h0a32,32,0,0,0,32,32h0a32,32,0,0,0,32-32h0A32,32,0,0,0,160,0Zm16,32a16,16,0,0,1-32,0h0a16,16,0,0,1,32,0Z"></path><rect x="184" y="56" width="8" height="8" rx="4" ry="4"></rect></g></g></svg>
            </div>
        </div>
    </div>
</header>
`;
const tmp = document.createElement('div');
tmp.innerHTML = html;
export const header = tmp.firstElementChild;