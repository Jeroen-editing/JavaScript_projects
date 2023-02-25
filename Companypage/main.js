const getById = (id) => (document.getElementById(id));

class Article {
    constructor(title, content) {
        this.title = title;
        this.content = content;

        //this.getTitle = () => {return this.title;}
        this.getTitle = () => this.title;
        this.getContent = () => this.content;
    }
}

const home_button = `
    <button class="nav_button" id="show_nav">
        <img class="menu_icon" id="menu_icon" src="assets/icons/menu_white.png" alt="">
    </button>
`;
const big_nav = `
    <div class="nav_container" id="nav_bar">
        <nav class="big_nav">
            <div class="nav_bar">
                <div class="nav_link small_link" id="hide_link"><p>&#8656; Close</p></div>
                <div class="nav_link" id="sales_link"><p>Best Sales</p></div>
                <div class="nav_link" id="rents_link"><p>Rent a DJ set</p></div>
                <div class="nav_link" id="location_link"><p>Our Location</p></div>
                <div class="nav_link" id="forms_link"><p>Members zone</p></div>
                <div class="nav_link small_link" id="home_link"><img class="home_icon" id="home_icon" src="assets/icons/home_lightgreen.png"></div>
            </div>
        </nav>
    </div>
`;
const small_nav = `
    <div class="navlist_container" id="nav_list">
        <nav class="small_nav">
            <div class="nav_list">
                <div class="nav_link small_links">
                    <div class="left_link" id="hide_link"><p>&#8656; Close</p></div>
                    <div class="right_link" id="home_link"><img class="home_icon" id="home_icon" src="assets/icons/home_lightgreen.png"></div>
                </div>
                <div class="nav_link" id="sales_link"><p>Best Sales</p></div>
                <div class="nav_link" id="rents_link"><p>Rent a DJ set</p></div>
                <div class="nav_link" id="location_link"><p>Our Location</p></div>
                <div class="nav_link" id="forms_link"><p>Members zone</p></div>
            </div>
        </nav>
    </div>
`;
const nav_button = document.getElementById('show_nav');
const nav_bar = document.getElementById('navbar');
const menu_icon = document.getElementById('menu_icon');

const articles = getById('pop_up');

const createGuaranteeArticle = () => {
    //const guarantee_article = new Article();
    const guarantee_title = `
        <section class="guarantee_article" id="guarantee_section">
            <div class="guaranteeTitle_container">
                <h3 class="guarantee_title">Our sales guarantees </h3>
            </div>
    `;
    const guarantee_content = `
        <div class="guarantees_container">
            <section class="guarantee">  
                <div class="left_col">
                    <img class="guarantee—icon material_icon" src="assets/icons/material_green.png" alt="">
                </div>
                <div class="right_col material_col">
                    <h4 class="guarantee—subtitle">Premium Materials</h4>
                    <div class="line_under"></div>
                    <p class="guarantee—text">Our brands are well known and only use the best materials for proffesional use.</p>
                </div>
            </section>
            <section class="guarantee">
                <div class="left_col">
                    <img class="guarantee—icon quality_icon" src="assets/icons/quality_green.png" alt="">
                </div>
                <div class="right_col quality_col">
                    <h4 class="guarantee—subtitle">Quality Assurance</h4>
                    <div class="line_under"></div>
                    <p class="guarantee—text">For every purchase you make, we will ensure there are no damages or faults and we randomly check and test our brands regulary.</p>
                </div>
            </section>
            <section class="guarantee">
                <div class="left_col">
                    <img class="guarantee—icon delivery_icon" src="assets/icons/delivery_green.png" alt="">
                </div>
                <div class="right_col delivery_col">
                    <h4 class="guarantee—subtitle">Fast Shipping & Delivery</h4>
                    <div class="line_under"></div>
                    <p class="guarantee—text">We make sure you recieve your purchases as soon as we securely packed them. We also provide free returns if you are not satisfied.</p>
                </div>
            </section>
        </div>
    </section>
    <section class="compLogo_article">
        <div class="compLogo_container">
            <img class="compLogo" src="assets/images/CompLogo.jpg" alt="The company logo">
        </div>
    </section>
    `;
    const guarantee_article = new Article(guarantee_title, guarantee_content);

    articles.innerHTML = ``;
    articles.innerHTML = `${guarantee_article.getTitle()}${guarantee_article.getContent()}`;
}

window.onload = () => {
    const screenTimeOut = () => {setTimeout(createGuaranteeArticle, 2500)};
    screenTimeOut();
};

const createSalesArticle = () => {
    //const sales_article = new Article();
    const sales_title = `
        <section class="sales_article">
            <div class="salesTitle_container">
                <h3 class="sales_title">View our best sales</h3>
            </div>
    `;
    const sales_content = `
        <div class="sales_container" id="sales">
            <section class="sale_section">
                <header class="image_header">
                    <img class="recordplayer" src="assets/images/technics.jpg" alt="">
                </header>
                <section class="info_section">
                    <div class="name">
                        <h4>Technics SL 1210 MK7</h4>
                    </div>
                    <div class="info">
                        <p>DJ's most wanted!</p>
                        <p>Best performances in different evironments.</p>
                        <p>Highest reaction speed.</p>
                    </div>
                    <div class="price">
                        <h5>999,- €</h5>
                    </div>
                </section>
                <footer class="select_footer">
                        <button class="select" value="1">More details / Order</button>
                </footer>
            </section>
            <section class="sale_section">
                <header class="image_header">
                    <img class="recordplayer" src="assets/images/pioneer.jpg" alt="">
                </header>
                <section class="info_section">
                    <div class="name">
                        <h4>Pioneer PLX 1000</h4>
                    </div>
                    <div class="info">
                        <p>Best Price/Quality sale!</p>
                        <p>Easy functionalities.</p>
                        <p>Top performances and nice design!</p>
                    </div>
                    <div class="price">
                        <h5>675,- €</h5>
                    </div>
                </section>
                <footer class="select_footer">
                    <button class="select" value="2">More details / Order</button>
                </footer>
            </section>
            <section class="sale_section">
                <header class="image_header">
                    <img class="recordplayer" src="assets/images/reloop.jpg" alt="">
                </header>
                <section class="info_section">
                    <div class="name">
                        <h4>Reloop RP 7000 MK2</h4>
                    </div>
                    <div class="info">
                        <p>Best sale for home use and beginning DJ's.</p>
                        <p>2 Start/Stop buttons.</p>
                        <p>Reverse function.</p>
                    </div>
                    <div class="price">
                        <h5>430,- €</h5>
                    </div>
                </section>
                <footer class="select_footer">
                    <button class="select" value="3">More details / Order</button>
                </footer>
            </section>
        </div>
    </section>
    <section class="compLogo_article">
        <div class="compLogo_container">
            <img class="compLogo" src="assets/images/CompLogo.jpg" alt="The company logo">
        </div>
    </section>
    `;
    const sales_article = new Article(sales_title, sales_content);

    articles.innerHTML = '';
    articles.innerHTML = `${sales_article.getTitle()}${sales_article.getContent()}`
}
const createRentsArticle = () => {
    //const rents_article = new Article();
    const rents_title = `
        <section class="rents_article">
            <div class="rentsTitle_container">
                <h3 class="rents_title">Our professional DJ gear for rent</h3>
            </div>
    `;
    const rents_content = `
        <div class="rents_container">
            <section class="rent_section top_col">
                <header class="image_header">
                    <img class="rentcase" src="assets/images/flightcase_01.jpg" alt="">
                </header>
                <section class="info_section">
                    <div class="pretitle_box"><h5 class="rent_pretitle">Type I</h5></div>
                    <div class="title_box"><h4 class="rent_title">Odyssey <span>FZBM10W</span><br>Flight Zone</h4></div>
                    <div class="subtitle_box"><h5 class="rent_subtitle">2 turntables and a soundmixer</h5></div>
                    <div class="text_box">
                        <p class="rent_text">Ideal for smaller parties, festivities or chill-out rooms.</p>
                        <p class="rent_text">The insurance fee is calculated in the price.</p>
                        <p class="rent_text">We have a large amount in stock
                            <br>Fits easy in most passengers cars, so no special transport needed.</p>
                    </div>
                </section>
                <footer class="select_footer">
                    <button class="select" value="1">More details / Order</button>
                </footer>
            </section>
            <section class="rent_section mid_col">
                <header class="image_header">
                    <img class="rentcase" src="assets/images/flightcase_02.jpg" alt="">   
                </header>
                <section class="info_section">
                    <div class="pretitle_box"><h5 class="rent_pretitle">Type II</h5></div>
                    <div class="title_box"><h4 class="rent_title">Odyssey <span>FFXGSLBM12WBL</span><br>Black Label</h4></div>
                    <div class="subtitle_box"><h5 class="rent_subtitle">2 turntables, a soundmixer<br>and a laptop</h5></div>
                    <div class="text_box">
                        <p class="rent_text">Ideal for DJ's who also use a latop to play more complex mixed sets.</p>
                        <p class="rent_text">The insurance fee is calculated in the price.</p>
                        <p class="rent_text">We have a large amount in stock.
                            <br>Won't fit in every passenger car, so special transport might be needed.</p>
                    </div>
                </section>
                <footer class="select_footer">
                    <button class="select" value="1">More details / Order</button>
                </footer>
            </section>
            <section class="rent_section bottom_col">
                <header class="image_header">
                    <img class="rentcase" src="assets/images/flightcase_03.jpg" alt="">
                </header>
                <section class="info_section">
                    <div class="pretitle_box"><h5 class="rent_pretitle">Type III</h5></div>
                    <div class="title_box"><h4 class="rent_title">Odyssey <span>FZGSPBM10WBL</span><br>Black Label</h4></div>
                    <div class="subtitle_box"><h5 class="rent_subtitle">2 turntables, a soundmixer, a laptop and a lightmixer</h5></div>
                    <div class="text_box">
                        <p class="rent_text">Ideal for large parties, festivities, festivals, theater shows, etc.</p>
                        <p class="rent_text">With space for extra equipment, like a laptop, lightmixer, etc.</p>    
                        <p class="rent_text">The insurance fee is calculated in the price.</p>
                        <p class="rent_text">Best to preorder in time.
                            <br>Won't fit in a passenger car, special transport is needed.</p>
                    </div>
                </section>
                <footer class="select_footer">
                    <button class="select" value="1">More details / Order</button>
                </footer>
            </section> 
        </div>
    </section>
    <section class="compLogo_article">
        <div class="compLogo_container">
            <img class="compLogo" src="assets/images/CompLogo.jpg" alt="The company logo">
        </div>
    </section>
    `;
    const rents_article = new Article(rents_title, rents_content);

    articles.innerHTML = ``;
    articles.innerHTML = `${rents_article.getTitle()}${rents_article.getContent()}`;
}
const createLocationArticle = () => {
    //const location_article = new Article();
    const location_title = `
        <section class="location_article"> 
            <div class="locationTitle_container">
                <h3 class="location_title">Our unique location</h3>
            </div>
    `;
    const location_content = `
        <div class="location_container" id="location">
            <section class="map_section">
                <div class="map_container">
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.4496019598196!2d4.402734445514228!3d51.21892832507483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6f7a5c430ef%3A0x1d7644ab1d308808!2sInfo%20Cathedral%2C%20Onze-Lieve-Vrouwekathedraal%20Antwerpen%2C%20Groenplaats%2021%2C%202000%20Antwerpen!5e0!3m2!1snl!2sbe!4v1658841735359!5m2!1snl!2sbe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section> 
            <section class="address_section">
                <div class="address_container">
                    <p class="street">Groenplaats 1,</p>
                    <p class="town">2000 Antwerp,</p>
                    <div class="region_row">
                        <p class="region">Antwerp,</p>
                        <p class="land">Belgium</p>
                    </div>
                    <p class="phone">+32(0)466 44 66 44</p>
                </div>
            </section>
        </div>
    </section>
    <section class="compLogo_article">
        <div class="compLogo_container">
            <img class="compLogo" src="assets/images/CompLogo.jpg" alt="The company logo">
        </div>
    </section>
    `;
    const location_article = new Article(location_title, location_content);

    articles.innerHTML = ``;
    articles.innerHTML = `${location_article.getTitle()}${location_article.getContent()}`;
}
//-------- FORM Selectors Function ----------------------------------------
const formFunctionanlity = () => {
    const register_btn = getById('show_registerForm');
    const login_btn = getById('show_loginForm');
    const regi_form = getById('regi_form');
    const login_form = getById('login_form');

    register_btn.addEventListener('click', () => {
        login_btn.classList.replace('is_active','login_inactive');
        register_btn.classList.replace('register_inactive', 'is_active');
        regi_form.classList.replace('hide_form', 'show_form');
        login_form.classList.replace('show_form', 'hide_form');

    })
    login_btn.addEventListener('click', () => {
        register_btn.classList.replace('is_active','register_inactive');
        login_btn.classList.replace('login_inactive', 'is_active');
        login_form.classList.replace('hide_form', 'show_form');
        regi_form.classList.replace('show_form', 'hide_form');
    })

    /* Gender selector */
    const select_popup = getById('select_popup');

    const createSelect = () => {
        //const selector = new Article();
        const selector_title = ``;
        const selector_content = `
            <ul class="select_list" id="gender_list">
                <li class="gender_type">Male</li>
                <li class="gender_type">Female</li>
                <li class="gender_type">Other</li>
            </ul>
        `;
        const selector = new Article(selector_title, selector_content);

        select_popup.classList.add('show_selectlist');
        select_popup.innerHTML = '';
        select_popup.innerHTML = `${selector.getTitle()}${selector.getContent()}`;
    }

    const select_btn = getById('open_select');
    select_btn.addEventListener('click', () => {
        createSelect();
        const gender_list = getById('gender_list');
        const genders = gender_list.querySelectorAll('.gender_type');
        console.log(genders);
        genders.forEach(gender => gender.addEventListener('click', () => {
            let get_gender = gender.textContent;
            console.log(get_gender);
            select_btn.value = get_gender;
            select_popup.classList.remove('show_selectlist');
        }))
    });
};
const createMembersArticle = () => {
    //const members_article = new Article();
    const members_title = `
        <section class="members_article">
            <div class="membersTitle_container">
                <h3 class="members_title">Become Memeber or login</h3>
            </div>
    `;
    const members_content = `
        <div class="members_container">
            <section class="forms_section">
                <div class="formsTitles_container">
                    <section class="formsTitles_section">
                        <h2 class="form_title is_active" id="show_registerForm">Register</h2>
                        <h2 class="form_title login_inactive" id="show_loginForm">Login</h2>
                    </section>
                </div>
                <div class="forms_container">
                    <section class="register_section show_form" id="regi_form">
                        <div class="register_container">
                            <form class="form" method="POST">
                                <div class="banner_container">
                                    <div class="banner_photo"></div>
                                    <div class="banner_png"><img src="assets/images/triangle_blue.png" alt=""></div>
                                </div>
                                <div class="input_container">
                                    <div class="input_box">
                                        <label for="name" class="input_label">Enter name</label>
                                        <input class="input_field" type="text" placeholder="Name" name="name">
                                    </div>
                                    <div class="input_box">
                                        <label for="email" class="input_label">Enter email</label>
                                        <input class="input_field" type="email" placeholder="Email" name="email">
                                    </div>
                                    <div class="input_box">
                                        <label for="phone" class="input_label">Enter phone</label>
                                        <input class="input_field" type="text" placeholder="Phone" name="phone">
                                    </div>
                                    <div class="input_box selector_box">
                                        <label for="gender" class="input_label">Choose gender</label>
                                        <input class="selector_field" id="open_select" type="text" placeholder="Choose gender" name="gender">
                                        <div class="select_box" id="select_popup"></div>
                                    </div>
                                    <div class="input_box">
                                        <label for="birthday" class="input_label">Enter birthday</label>
                                        <div class="date_box">
                                            <input class="date_field" id="datepicker" type="text" readonly  placeholder="Birthday" name="birthday">
                                        </div>
                                    </div>
                                    <div class="input_box" class="input_label">
                                        <label for="password" class="input_label">Enter password</label>
                                        <input class="input_field" type="password" placeholder="Password" name="password">
                                    </div>
                                    <div class="input_box">
                                        <label for="conferm" class="input_label">Conferm password</label>
                                        <input class="input_field" type="password" placeholder="Conferm password" name="conferm">
                                    </div>
                                    <div class="input_box submit_box">
                                        <input class="submit_btn" type="submit" name="submit" value="Register">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section class="login_section hide_form" id="login_form">
                        <div class="login_container">
                            <form class="form" method="POST">
                                <div class="topBanner_container">
                                    <div class="banner_photo"></div>
                                    <div class="banner_png"><img src="assets/images/triangle_blue.png" alt=""></div>
                                </div>
                                <div class="input_container">
                                    <div class="input_box">
                                        <label for="email" class="input_label">Enter email</label>
                                        <input class="input_field" type="email" placeholder="Email" name="email">
                                    </div>
                                    <div class="input_box input_bottom">
                                        <label for="password" class="input_label">Enter password</label>
                                        <input class="input_field" type="password" placeholder="Password" name="password">
                                    </div>
                                    <div class="input_box btn box">
                                        <input class="submit_btn" type="submit" name="submit" value="Login">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>    
                </div>
            </section>
        </div>
    </section>
    <section class="compLogo_article">
        <div class="compLogo_container">
            <img class="compLogo" src="assets/images/CompLogo.jpg" alt="The company logo">
        </div>
    </section>
    `;
    const members_article = new Article(members_title, members_content);

    articles.innerHTML = ``;
    articles.innerHTML = `${members_article.getTitle()}${members_article.getContent()}`;
    formFunctionanlity();
}

const show_nav = () => {
    if (window.innerWidth >= 768) {
        nav_bar.innerHTML = '';
        nav_bar.innerHTML = big_nav;
    } else {
        nav_bar.innerHTML = '';
        nav_bar.innerHTML = small_nav;

        const links = document.querySelectorAll('.nav_link')
        const video = getById('video');
        let videoHeight = video.clientHeight;
        console.log(videoHeight);
        if (videoHeight <= 338) {
            const nav_list = getById('nav_list');
            nav_list.style.minHeight = `${videoHeight}px`;
            nav_list.style.background = `rgba(0,0,0,.85)`;
            videoHeight = videoHeight / 5.75;
            console.log(videoHeight);
            links.forEach(link => link.style.height = `${videoHeight}px`);
        }
    }

    //------ Links to open articles have to be inside the nav function
    const open_guarantees = getById('home_link');
    const home_link_icon = getById('home_icon');
    console.log(open_guarantees);
    open_guarantees.addEventListener('mouseover', () => {
        home_link_icon.src = `assets/icons/home.png`;
    });
    open_guarantees.addEventListener('mouseout', () => {
        home_link_icon.src = `assets/icons/home_lightgreen.png`;
    });
    open_guarantees.addEventListener('click', createGuaranteeArticle);

    const open_sales = getById('sales_link');
    open_sales.addEventListener('click', createSalesArticle);

    const open_rents= getById('rents_link');
    open_rents.addEventListener('click', createRentsArticle);

    const open_location = getById('location_link');
    open_location.addEventListener('click', createLocationArticle);

    const open_membersZone = getById('forms_link');
    open_membersZone.addEventListener('click', createMembersArticle);

    //------ To close and open the NAV again
    const hide_nav = () => {
        nav_bar.innerHTML = '';
        nav_bar.innerHTML = home_button;

        const nav_button = getById('show_nav');
        const menu_icon = getById('menu_icon');
        nav_button.addEventListener('mouseover', () => {
            menu_icon.src = 'assets/icons/menu_black.png';
            menu_icon.style.opacity = '1';
        })
        nav_button.addEventListener('mouseout', () => {
            menu_icon.src = 'assets/icons/menu_white.png';
            menu_icon.style.opacity = '.3';
        })
        nav_button.addEventListener('click', show_nav);
    }
    const hide_button = getById('hide_link');
    hide_button.addEventListener('click', hide_nav);
}
//------ To open the NAV
nav_button.addEventListener('mouseover', () => {
    menu_icon.src = 'assets/icons/menu_black.png';
    menu_icon.style.opacity = '1';
})
nav_button.addEventListener('mouseout', () => {
    menu_icon.src = 'assets/icons/menu_white.png';
    menu_icon.style.opacity = '.3';
})
nav_button.addEventListener('click', show_nav);