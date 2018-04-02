package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserPostSetController {

    @Autowired
    private UserRepository repository;

    private String userName = "";
    private String interest = "";

    @RequestMapping(method=RequestMethod.POST,value="/setinterest")
    public User user(@RequestParam(value="username"/*, defaultValue=""*/) String userName,
                     @RequestParam(value="interest"/*, defaultValue=""*/) String interest) {
        //TODO chequear que el usuario no tenga ya interés? O eso es desde la app?
        repository.save(new User(userName, interest));
        return new User(userName,
                interest);
    }
}

