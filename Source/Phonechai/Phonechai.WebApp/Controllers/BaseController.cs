using Phonechai.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Phonechai.WebApp.Controllers
{
    public class BaseController : ApiController
    {
        protected BusinessDbContext db;

        // GET: Base
        public BaseController()
        {
            db = new BusinessDbContext();
        }
    }
}