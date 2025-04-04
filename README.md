# Food Zone

## Description-

           As a recipe creator, you can submit your recipes to these food sharing sites, and then these sites will display and feature those recipes. These food sharing sites are all a little different, but submitting your content to them can be part of an effective traffic-building strategy, especially when you’re just starting out.

One quick note before we dive in — over the years, many food sharing sites have come and gone. These days, many social media platforms (like Pinterest) perform similar functions to the food sharing sites of yesteryear.

That being said, before you start submitting your recipes to a food sharing site, it’s important to check when the most recent posts on the site are dated. If there aren’t any recipes posted within the last month or so, don’t waste your time!




## Techonology used 

   Framer motion
  surge deploy- https://lame-pancake.surge.sh
  newLIveSite-plucky-competition.surge.sh
  netlify -https://leafy-eclair-7a1f69.netlify.app/


     <div className="card card-compact bg-base-100 shadow-xl mt-9">
                <figure>
                    <img className="h-[130px]"
                        src={image}
                        alt="foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-purple-800 border p-4">{name}</h2>
                    <h2 className="card-title">Location:{location}</h2>
                    <h2 className="card-title">Food Quantity:{quantity}</h2>
                    <h2 className="card-title">Expired:{time}</h2>
                    <h2 className="card-title">Status:{status}</h2>
                    {/* <p>I{notes}</p> */}
                    <div className="card-actions justify-end">
                       <Link to="/avaliableFoodsPage"> <button  onClick={handleView}className="btn bg-gradient-to-r from-purple-500 to-rose-600">A Show All</button></Link>
                    </div>
                </div>
            </div>


            <!-- 2nd -->
            <div className="card bg-base-100 image-full w-96 shadow-sm">
                <figure>
                    <img className="w-[166px]"
                        src={image}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                <h2 className="card-title text-purple-800 border p-4">{name}</h2>
                    <h2 className="card-title">Location:{location}</h2>
                    <h2 className="card-title">Food Quantity:{quantity}</h2>
                    <h2 className="card-title">Expired:{time}</h2>
                    <h2 className="card-title">Status:{status}</h2>
                    {/* <p>I{notes}</p> */}
                    <div className="card-actions justify-end">
                       <Link to="/avaliableFoodsPage"> <button  onClick={handleView}className="btn bg-gradient-to-r from-purple-500 to-rose-600">A Show All</button></Link>
                    </div>
                </div>
            </div>