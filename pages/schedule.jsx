import {Navbar} from "../components/Navbar";
import Link from "next/link";

export default function Schedule() {
    return (
        <>
            <Navbar />
            <div className={`lg:mx-auto m-10 prose prose-lg dark:prose-invert prose-slate`}>
                <h1>Festival Schedule</h1>
                <div id={`march10`}>
                <h2>Friday, March 10</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>5:00</td>
                        <td>PARTY AT COW PIE UNTIL THE COWS COME HOME<br />CAR CONVOY LEAVES ROCALLA AVE AT ALLEY RD</td>
                    </tr>
                    </tbody>
                </table>

                <p>GET YOUR TICKETS NOW!<br />Tickets available at Copper News, Ajo Chamber of Commerce and the Saturday
                    Mercado</p>

                <p>BRING YOUR OWN CHAIR!!!</p>

                <p>Dinner, live music, stargazing, bonfire jam</p>
                </div>
                <hr />
                <div id={`march11`}>
                    <h2>Saturday, March 11</h2>
                    <Link href={`/vendors`}>
                        <button name='Vendors' className="text-shadow-sm bg-blue-500 dark:bg-gray-700 text-white shadow-gray-600 drop-shadow-lg dark:outline-1 dark:outline-gray-200 hover:bg-blue-400 dark:hover:bg-gray-600 rounded-lg px-4 py-2 mt-2">Vendors</button>
                    </Link>
                    <h2>AJO PLAZA</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>9-10</td>
                            <td>Opening Event: Dialactic Flowers Music / Bonzai studio yoga on the plaza lawn. Free and open to
                                the public
                            </td>
                        </tr>
                        <tr>
                            <td>9-2</td>
                            <td>Organ Pipe Cactus National Monument Solarscope<br />Pima County Health Department Covid Vaccines
                            </td>
                        </tr>
                        <tr>
                            <td>9-5</td>
                            <td>Arizona Raptor Center with rehabilitated raptors</td>
                        </tr>
                        <tr>
                            <td>9-4</td>
                            <td><Link href={'https://www.tomkiefer.com/el-sueno-americano'} target={'_blank'} rel={'noreferrer'}>El Sueño Americano</Link> exhibit/gallery</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">9-6</td>
                            <td>Art, Artisan Vendors and are demonstrations and Peace Train rides for the kids</td>
                        </tr>
                        <tr>
                            <td>Food Vendors<br />Nina's Kitchen (Rich and Ashley)<br />Ajo Pie<br />Jody Proscia<br />Ajo Sno<br />Bunny
                                LaGrand</td>
                        </tr>
                        <tr>
                            <td>12-4</td>
                            <td>Beer/Wine Garden <strong>CASH ONLY!!!</strong><br />Benefits Ajo Volunteer Fire Department</td>
                        </tr>
                        </tbody>
                    </table>

                <h3 className={`text-center`}>Stage Lineup</h3>

                <table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Band</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>10:00</td>
                        <td>PEACE RESTORED</td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                        <td>PRIMINITION</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>BALLET FOLKLORICO</td>
                    </tr>
                    <tr>
                        <td>12:30</td>
                        <td>FLY BY NIGHT</td>
                    </tr>
                    <tr>
                        <td>1:00</td>
                        <td>ZANIEL AND T.O. NATIVES</td>
                    </tr>
                    <tr>
                        <td>2:00</td>
                        <td>BETH AND TERRY</td>
                    </tr>
                    <tr>
                        <td>3:00</td>
                        <td>KITCHEN TABLE BAND</td>
                    </tr>
                    <tr>
                        <td>4:00</td>
                        <td>TONY'S MARTINI BAND<br />FLAM CHEN STILTWALKERS</td>
                    </tr>
                    <tr>
                        <td>5:00</td>
                        <td>GERTY N THE T.O. BOYZ</td>
                    </tr>
                    </tbody>
                </table>

                <h2>CURLEY COMMONS</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>4-7</td>
                        <td>CLAY STUDIO, WOOD SHOP, WEAVING STUDIO OPEN!</td>
                    </tr>
                    <tr>
                        <td>6:00</td>
                        <td>OPEN MIC with BOBBY NARCHO.....YOUR CHANCE TO PERFORM!!!</td>
                    </tr>
                    <tr>
                        <td>6:00</td>
                        <td>LISTENING ROOM WITH VICKI TAPP and PRIMINITION - original music</td>
                    </tr>
                    </tbody>
                </table>

                <h2>3 NATIONS</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>6:00</td>
                        <td>DESERT GLASS<br />FLAM CHEN STILTWALKERS</td>
                    </tr>
                    <tr>
                        <td>7:00</td>
                        <td>ZANIEL AND T.O. NATIVES</td>
                    </tr>
                    <tr>
                        <td>8:00</td>
                        <td>GERTY N THE T.O. BOYZ</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div id={`march12`}>
                <hr />
                <h2 className={`mb-1`}>Sunday, March 12</h2>
                <h3>DISCOVER AJO</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>5:30-12p</td>
                        <td><Link href={'https://goo.gl/maps/jT5m4Ppat38Mxvgp6'} target={'_blank'} rel={'noreferrer'}>ROADRUNNER JAVA & DONUTS</Link></td>
                    </tr>
                    <tr>
                        <td>9-10</td>
                        <td>MIMI’S WEEKLY SUNDAY COMMUNITY BREAKFAST<br />$10/plate FEATURING MUSIC BY BETH AND TERRY<br />
                            @ <Link href={'https://goo.gl/maps/GGHRZapZFCz9amdu5'} target={'_blank'} rel={'noreferrer'}>SONORAN DESERT INN AND CONFERENCE CENTER</Link></td>
                    </tr>
                    <tr>
                        <td>9-12</td>
                        <td>FRUIT TREE PROPAGATION WORKSHOP WITH JESUS GARCIA.*$20-$60 suggested donation*<br />
                           @ <Link href={'https://goo.gl/maps/GGHRZapZFCz9amdu5'} target={'_blank'} rel={'noreferrer'}>SONORAN
                                DESERT INN AND CONFERENCE CENTER</Link></td>
                    </tr>
                    <tr>
                        <td>9-3</td>
                        <td><Link href={'https://goo.gl/maps/mE7LDHhYy2FomDsN7'} target={'_blank'} rel={'noreferrer'}>HUMANITARIAN AID OFFICE</Link> OPEN (southern most free standing building beyond 3 Nations)</td>
                    </tr>
                    <tr>
                        <td>9:30-1:30</td>
                        <td>BIRDING WITH ORPI RANGERS <br />
                            @ <Link href={'https://goo.gl/maps/URWJhU91cgzwWHPKA'} target={'_blank'} rel={'noreferrer'}>QUITOBOQUITO</Link></td>
                    </tr>
                    <tr>
                        <td>10:00</td>
                        <td>FAMILY BIKERIDE AROUND AJO. <br />
                            <Link href={'https://goo.gl/maps/HQ17itYyy4sjb4as8'} target={'_blank'} rel={'noreferrer'}>MEET AT THE FLAGPOLE AT THE PLAZA</Link></td>
                    </tr>
                    <tr>
                        <td>10-11</td>
                        <td>FLAM CHEN STILTWALKERS - up close and personal performance!</td>
                    </tr>
                    <tr>
                        <td>10-2</td>
                        <td>MOST AJO STORES AND GALLERIES WILL BE OPEN</td>
                    </tr>

                    <tr>
                        <td>10-2</td>
                        <td><Link href={'https://goo.gl/maps/p2uszUtkWebbbgxr5'} target={'_blank'} rel={'noreferrer'}>ART UNDER THE ARCHES GALLERY</Link></td>
                    </tr>
                    <tr>
                        <td>10-2</td>
                        <td>COPPER NEWS GALLERY<br />
                            @ <Link href={'https://goo.gl/maps/LX7yMFrVwvddJq5v5'} target={'_blank'} rel={'noreferrer'}>Ajo Copper News</Link></td>
                    </tr>
                    <tr>
                        <td>10-2</td>
                        <td>SONORAN DESERT WINDS STUDIO OPEN HOUSE - PAPER MAKING<br />
                            @ <Link href={'https://goo.gl/maps/T4gYVxRUNdyQLQrx7'} target={'_blank'} rel={'noreferrer'}>1640 N Second Ave</Link></td>
                    </tr>
                    <tr>
                        <td>10-2</td>
                        <td><Link href={'https://goo.gl/maps/DY3y21ts1W1N4Ru58'} target={'_blank'} rel={'noreferrer'}>THE COPPER JAVELINA</Link></td>
                    </tr>
                    <tr>
                        <td>10-2</td>
                        <td><Link href={'https://goo.gl/maps/JxjTgWXsTu2aRguj8'} target={'_blank'} rel={'noreferrer'}>CAPTAIN KIRK'S - BUY SELL TRADE</Link></td>
                    </tr>
                    <tr>
                        <td>10-2</td>
                        <td>NEWCOMER BOOTH AT PLAZA - get lots of info about your new town</td>
                    </tr>
                    <tr>
                        <td>1-2</td>
                        <td>AJO HISTORY WALK WITH BILL PERRY</td>
                    </tr>
                    <tr>
                        <td>3-4:30</td>
                        <td>CRYSTAL BOWL HEALING SESSION <br />
                            @ <Link href={'https://goo.gl/maps/9qqpQjjBAQrLizSz7'} target={'_blank'} rel={'noreferrer'}>BONZAI STUDIO</Link></td>
                    </tr>
                    </tbody>
                </table>

                <p><strong>SEE YOU NEXT YEAR! STAY TUNED FOR DETAILS!</strong></p>
            </div>
            </div>
        </>
        )
}