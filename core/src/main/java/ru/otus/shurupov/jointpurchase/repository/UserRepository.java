package ru.otus.shurupov.jointpurchase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import ru.otus.shurupov.jointpurchase.domain.User;

import java.util.Optional;

@CrossOrigin
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> getByUsername(String username);

}
