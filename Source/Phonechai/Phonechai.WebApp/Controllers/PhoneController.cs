using Phonechai.Model;
using Phonechai.Service;
using Phonechai.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Phonechai.WebApp.Controllers
{
    public class PhoneController : BaseController
    {

        PhoneService service;
        public PhoneController()
        {
            service = new PhoneService(db);
        }

        public IHttpActionResult Post(Phone phone)
        {
            if (string.IsNullOrEmpty(phone.Id))
            {
                phone.Id = (new Guid()).ToString();
            }
            string id = service.Add(phone);
            return Ok(id);
        }


    }
}