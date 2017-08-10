/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.bakingpie.dvd.rest;

import org.bakingpie.dvd.domain.DVD;
import org.bakingpie.dvd.repository.DVDRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@ApplicationScoped
@Path("load")
public class LoadResource {
    @Inject
    private DVDRepository moviesBean;

    @POST
    public void load() {
        moviesBean.addMovie(new DVD("Wedding Crashers", "David Dobkin", "Comedy", 7, 2005));
        moviesBean.addMovie(new DVD("Starsky & Hutch", "Todd Phillips", "Action", 6, 2004));
        moviesBean.addMovie(new DVD("Shanghai Knights", "David Dobkin", "Action", 6, 2003));
        moviesBean.addMovie(new DVD("I-Spy", "Betty Thomas", "Adventure", 5, 2002));
        moviesBean.addMovie(new DVD("The Royal Tenenbaums", "Wes Anderson", "Comedy", 8, 2001));
        moviesBean.addMovie(new DVD("Zoolander", "Ben Stiller", "Comedy", 6, 2001));
        moviesBean.addMovie(new DVD("Shanghai Noon", "Tom Dey", "Comedy", 7, 2000));
    }
}